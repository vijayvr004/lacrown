import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LogOut, Search, Download, CheckCircle,
  AlertCircle, RefreshCw, ChevronRight,
  ExternalLink, Database
} from 'lucide-react';
import {
  checkAdminSession, clearAdminSession, getAllRequests, updateRequestStatus,
  updateRequestNotes, getDashboardStats, type AppointmentRequest, type RequestStatus
} from '../data/mockApi';
import { ApiService } from '../services/api';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const [stats, setStats] = useState(getDashboardStats());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<AppointmentRequest | null>(null);
  const [statusNote, setStatusNote] = useState('');
  const [newStatus, setNewStatus] = useState<RequestStatus>('Pending');
  const [internalNoteDraft, setInternalNoteDraft] = useState('');
  const [toast, setToast] = useState<string | null>(null);
  const [dbConnected, setDbConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const adminKey = sessionStorage.getItem('lacrown_admin_key') || 'default-secret-change-in-production';

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const localList = getAllRequests();

    try {
      const res = await ApiService.getAdminOverview(adminKey);

      if (res.success && res.data) {
        setDbConnected(Boolean(res.data.databaseConnected));

        if (res.data.databaseConnected && Array.isArray(res.data.appointments) && res.data.appointments.length > 0) {
          // Map PostgreSQL rows to UI AppointmentRequest structure
          const dbRequests: AppointmentRequest[] = res.data.appointments.map((row: any) => ({
            id: String(row.id || row.reference),
            referenceNumber: row.reference,
            customerName: row.name,
            phone: row.phone,
            email: row.email?.includes('lacrown-guest') ? undefined : row.email,
            serviceType: (row.service || '').toLowerCase().includes('salon') ? 'Salon' : 'Aesthetic Clinic',
            serviceCategory: row.doctor || 'Clinical Services',
            serviceName: row.service || 'Consultation',
            preferredDate: row.preferred_date || new Date().toISOString().slice(0, 10),
            preferredTime: row.preferred_time || '11:00 AM',
            preferredContact: 'WhatsApp',
            message: row.notes || undefined,
            consentGiven: true,
            status: (row.status?.toLowerCase().includes('complete')
              ? 'Completed'
              : row.status?.toLowerCase().includes('progress')
              ? 'In Progress'
              : row.status?.toLowerCase().includes('cancel')
              ? 'Cancelled'
              : 'Pending') as RequestStatus,
            statusHistory: [
              {
                status: (row.status || 'Pending') as RequestStatus,
                changedAt: row.created_at || new Date().toISOString(),
                changedBy: 'System Concierge'
              }
            ],
            internalNotes: row.notes || '',
            submittedAt: row.created_at || new Date().toISOString(),
            updatedAt: row.updated_at || row.created_at || new Date().toISOString(),
          }));

          // Merge without duplicates by reference
          const existingRefs = new Set(dbRequests.map((r) => r.referenceNumber));
          const uncommittedLocal = localList.filter((r) => !existingRefs.has(r.referenceNumber));
          const combined = [...dbRequests, ...uncommittedLocal];

          setRequests(combined);

          const todayStr = new Date().toDateString();
          setStats({
            total: combined.length,
            pending: combined.filter((r) => r.status === 'Pending').length,
            inProgress: combined.filter((r) => r.status === 'In Progress').length,
            completed: combined.filter((r) => r.status === 'Completed').length,
            cancelled: combined.filter((r) => r.status === 'Cancelled').length,
            today: combined.filter((r) => new Date(r.submittedAt).toDateString() === todayStr).length,
          });
          return;
        }
      }
    } catch {
      setDbConnected(false);
    } finally {
      setIsLoading(false);
    }

    // Default to local cache
    setRequests(localList);
    setStats(getDashboardStats());
  }, [adminKey]);

  useEffect(() => {
    if (!checkAdminSession()) {
      navigate('/admin/login', { replace: true });
      return;
    }
    loadData();
  }, [navigate, loadData]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('lacrown_admin_key');
    clearAdminSession();
    navigate('/admin/login');
  };

  const handleOpenDetail = (req: AppointmentRequest) => {
    setSelectedRequest(req);
    setNewStatus(req.status);
    setStatusNote('');
    setInternalNoteDraft(req.internalNotes || '');
  };

  const handleSaveStatus = async () => {
    if (!selectedRequest) return;

    // 1. Live Backend update
    if (dbConnected) {
      await ApiService.updateAppointmentStatus(selectedRequest.id, newStatus, adminKey);
    }

    // 2. Local cache update
    const updated = updateRequestStatus(
      selectedRequest.id,
      newStatus,
      statusNote ? statusNote : `Status changed to ${newStatus}`,
      'Administrator'
    );
    if (updated) {
      setSelectedRequest(updated);
      loadData();
      showToast(`Request ${updated.referenceNumber} status updated to ${newStatus}.`);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedRequest) return;

    // 1. Live Backend update
    if (dbConnected) {
      await ApiService.updateAppointmentNotes(selectedRequest.id, internalNoteDraft, adminKey);
    }

    // 2. Local cache update
    const updated = updateRequestNotes(selectedRequest.id, internalNoteDraft);
    if (updated) {
      setSelectedRequest(updated);
      loadData();
      showToast('Internal note saved successfully.');
    }
  };

  const handleExportCSV = () => {
    const headers = ['Reference', 'Customer', 'Phone', 'Email', 'Type', 'Service', 'Date', 'Time', 'Status', 'Submitted'];
    const rows = filteredRequests.map((r) => [
      r.referenceNumber,
      `"${r.customerName}"`,
      r.phone,
      r.email || '',
      r.serviceType,
      `"${r.serviceName}"`,
      r.preferredDate,
      r.preferredTime,
      r.status,
      new Date(r.submittedAt).toLocaleDateString(),
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `lacrown_requests_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('CSV Exported successfully.');
  };

  const filteredRequests = useMemo(() => {
    return requests.filter((r) => {
      const matchStatus = statusFilter === 'all' || r.status === statusFilter;
      const matchType = typeFilter === 'all' || r.serviceType === typeFilter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        r.customerName.toLowerCase().includes(q) ||
        r.phone.includes(q) ||
        r.referenceNumber.toLowerCase().includes(q) ||
        r.serviceName.toLowerCase().includes(q);
      return matchStatus && matchType && matchSearch;
    });
  }, [requests, statusFilter, typeFilter, search]);

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'Pending':
        return <span className="badge-pending">Pending</span>;
      case 'In Progress':
        return <span className="badge-in-progress">In Progress</span>;
      case 'Completed':
        return <span className="badge-completed">Completed</span>;
      case 'Cancelled':
        return <span className="badge-cancelled">Cancelled</span>;
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col font-sans">
      {/* Admin Header */}
      <header className="bg-burgundy-wine text-white px-6 py-4 flex items-center justify-between border-b border-gold/40 shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="LA CROWN" className="h-9 w-auto object-contain drop-shadow" />
            <span className="font-serif text-lg text-white font-bold tracking-wider">LA CROWN</span>
          </Link>
          <span className="text-[11px] bg-burgundy px-3 py-0.5 rounded-full uppercase tracking-widest font-semibold text-white border border-rose-border/30">
            Admin Console
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" target="_blank" className="text-xs text-white/70 hover:text-gold flex items-center gap-1">
            <span>Live Site</span> <ExternalLink size={12} />
          </Link>
          <div className="h-4 w-px bg-white/20" />
          <button
            onClick={handleLogout}
            className="text-xs text-white/80 hover:text-red-400 flex items-center gap-1.5 transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      {/* Dynamic Environment & Database Connectivity Banner */}
      <div
        className={`border-b px-6 py-2.5 text-xs flex items-center justify-between ${
          dbConnected
            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
            : 'bg-amber-50 border-amber-300 text-amber-900'
        }`}
      >
        <div className="flex items-center gap-2">
          {dbConnected ? (
            <>
              <Database size={15} className="text-emerald-700" />
              <span>
                <strong>Live PostgreSQL Connected:</strong> Real-time synchronization active with Neon Database & Resend Email Services.
              </span>
            </>
          ) : (
            <>
              <AlertCircle size={15} className="text-amber-700" />
              <span>
                <strong>Local Operation Mode:</strong> Operating with local cache. Start backend service to sync with live PostgreSQL.
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => loadData()}
            disabled={isLoading}
            className="flex items-center gap-1 text-[11px] font-semibold text-burgundy hover:text-gold"
          >
            <RefreshCw size={12} className={isLoading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <span className="text-[11px] opacity-75">Auth: admin@lacrown.in</span>
        </div>
      </div>

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-charcoal text-white px-5 py-3 border-l-4 border-gold shadow-luxury text-xs flex items-center gap-2 animate-slide-up">
          <CheckCircle size={16} className="text-gold" />
          <span>{toast}</span>
        </div>
      )}

      {/* Main Dashboard Workspace */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-white p-4 border border-ivory-300 shadow-sm">
            <div className="text-xs text-taupe uppercase font-semibold">Total Requests</div>
            <div className="text-2xl font-serif text-charcoal font-bold mt-1">{stats.total}</div>
          </div>
          <div className="bg-white p-4 border border-amber-200 bg-amber-50/30 shadow-sm">
            <div className="text-xs text-amber-800 uppercase font-semibold">Pending</div>
            <div className="text-2xl font-serif text-amber-900 font-bold mt-1">{stats.pending}</div>
          </div>
          <div className="bg-white p-4 border border-blue-200 bg-blue-50/30 shadow-sm">
            <div className="text-xs text-blue-800 uppercase font-semibold">In Progress</div>
            <div className="text-2xl font-serif text-blue-900 font-bold mt-1">{stats.inProgress}</div>
          </div>
          <div className="bg-white p-4 border border-green-200 bg-green-50/30 shadow-sm">
            <div className="text-xs text-green-800 uppercase font-semibold">Completed</div>
            <div className="text-2xl font-serif text-green-900 font-bold mt-1">{stats.completed}</div>
          </div>
          <div className="bg-white p-4 border border-red-200 bg-red-50/30 shadow-sm">
            <div className="text-xs text-red-800 uppercase font-semibold">Cancelled</div>
            <div className="text-2xl font-serif text-red-900 font-bold mt-1">{stats.cancelled}</div>
          </div>
          <div className="bg-white p-4 border border-ivory-300 shadow-sm">
            <div className="text-xs text-burgundy uppercase font-semibold">Received Today</div>
            <div className="text-2xl font-serif text-burgundy font-bold mt-1">{stats.today}</div>
          </div>
        </div>

        {/* Requests Filter & Actions Bar */}
        <div className="bg-white p-4 border border-ivory-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, ref, service..."
                className="form-input pl-8 py-2 text-xs"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select py-2 text-xs w-auto"
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="form-select py-2 text-xs w-auto"
            >
              <option value="all">All Types</option>
              <option value="Aesthetic Clinic">Aesthetic Clinic</option>
              <option value="Salon">Luxury Salon</option>
            </select>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={loadData}
              className="p-2 border border-ivory-300 hover:bg-ivory-100 text-taupe hover:text-charcoal transition-colors"
              title="Refresh"
            >
              <RefreshCw size={14} />
            </button>
            <button
              onClick={handleExportCSV}
              className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
            >
              <Download size={13} /> Export CSV
            </button>
          </div>
        </div>

        {/* Request Records Table */}
        <div className="bg-white border border-ivory-300 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-ivory-100 text-taupe uppercase tracking-wider text-[11px] border-b border-ivory-300">
              <tr>
                <th className="py-3 px-4">Ref Number</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Requested Service</th>
                <th className="py-3 px-4">Preferred Slot</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Submitted</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ivory-200">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    onClick={() => handleOpenDetail(req)}
                    className="hover:bg-ivory-50 cursor-pointer transition-colors"
                  >
                    <td className="py-3.5 px-4 font-mono font-medium text-burgundy">{req.referenceNumber}</td>
                    <td className="py-3.5 px-4 font-medium text-charcoal">
                      <div>{req.customerName}</div>
                      <div className="text-[11px] text-taupe">{req.phone}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`text-[10px] px-2 py-0.5 font-medium ${req.serviceType === 'Aesthetic Clinic' ? 'bg-burgundy/10 text-burgundy' : 'bg-charcoal/10 text-charcoal'}`}>
                        {req.serviceType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-charcoal font-medium">{req.serviceName}</td>
                    <td className="py-3.5 px-4 text-taupe">
                      <div>{req.preferredDate}</div>
                      <div className="text-[11px]">{req.preferredTime}</div>
                    </td>
                    <td className="py-3.5 px-4">{getStatusBadge(req.status)}</td>
                    <td className="py-3.5 px-4 text-taupe text-[11px]">
                      {new Date(req.submittedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleOpenDetail(req); }}
                        className="text-burgundy font-medium hover:text-gold flex items-center justify-end gap-1 ml-auto"
                      >
                        Manage <ChevronRight size={13} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-taupe">
                    No appointment requests match your current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Details & Status Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-ivory-300 shadow-luxury p-6 md:p-8">
            <div className="flex items-start justify-between pb-4 border-b border-ivory-200 mb-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-taupe">
                  Request Detail
                </span>
                <h3 className="font-serif text-2xl text-charcoal mt-0.5">
                  {selectedRequest.referenceNumber}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-taupe hover:text-charcoal p-1 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Client Info */}
              <div className="space-y-3 bg-ivory-100 p-4 border border-ivory-200 text-xs">
                <h4 className="font-serif text-sm font-semibold text-charcoal">Client Information</h4>
                <div>
                  <span className="text-taupe block">Name:</span>
                  <strong className="text-charcoal">{selectedRequest.customerName}</strong>
                </div>
                <div>
                  <span className="text-taupe block">Phone:</span>
                  <a href={`tel:${selectedRequest.phone}`} className="text-burgundy underline">
                    {selectedRequest.phone}
                  </a>
                </div>
                {selectedRequest.email && (
                  <div>
                    <span className="text-taupe block">Email:</span>
                    <a href={`mailto:${selectedRequest.email}`} className="text-burgundy underline">
                      {selectedRequest.email}
                    </a>
                  </div>
                )}
                <div>
                  <span className="text-taupe block">Preferred Contact:</span>
                  <span className="text-charcoal">{selectedRequest.preferredContact}</span>
                </div>
              </div>

              {/* Service & Slot */}
              <div className="space-y-3 bg-ivory-100 p-4 border border-ivory-200 text-xs">
                <h4 className="font-serif text-sm font-semibold text-charcoal">Treatment Details</h4>
                <div>
                  <span className="text-taupe block">Division:</span>
                  <strong className="text-charcoal">{selectedRequest.serviceType}</strong>
                </div>
                <div>
                  <span className="text-taupe block">Service:</span>
                  <strong className="text-burgundy text-sm">{selectedRequest.serviceName}</strong>
                </div>
                <div>
                  <span className="text-taupe block">Category:</span>
                  <span className="text-charcoal">{selectedRequest.serviceCategory}</span>
                </div>
                <div>
                  <span className="text-taupe block">Requested Slot:</span>
                  <strong className="text-charcoal">
                    {selectedRequest.preferredDate} at {selectedRequest.preferredTime}
                  </strong>
                </div>
              </div>
            </div>

            {selectedRequest.message && (
              <div className="mb-6 p-4 border border-ivory-200 bg-white">
                <span className="text-xs text-taupe block mb-1">Customer Note:</span>
                <p className="text-xs text-charcoal italic">{selectedRequest.message}</p>
              </div>
            )}

            {/* Workflow Status Form */}
            <div className="border-t border-ivory-200 pt-6 space-y-4">
              <h4 className="font-serif text-base text-charcoal">Update Status & Workflow</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label text-xs">Current Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as RequestStatus)}
                    className="form-select text-xs"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="form-label text-xs">Audit Status Log Note</label>
                  <input
                    type="text"
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder="e.g. Confirmed slot with customer via phone"
                    className="form-input text-xs"
                  />
                </div>
              </div>

              <button
                onClick={handleSaveStatus}
                className="btn-primary text-xs py-2.5 px-4"
              >
                Apply Status Change
              </button>
            </div>

            {/* Internal Admin Notes */}
            <div className="border-t border-ivory-200 pt-6 mt-6">
              <label className="form-label text-xs">Internal Notes (Staff Only)</label>
              <textarea
                rows={2}
                value={internalNoteDraft}
                onChange={(e) => setInternalNoteDraft(e.target.value)}
                placeholder="Private clinician or therapist assignment notes..."
                className="form-input text-xs resize-none mb-2"
              />
              <button
                onClick={handleSaveNotes}
                className="btn-secondary text-xs py-2 px-3"
              >
                Save Notes
              </button>
            </div>

            {/* Status History Trail */}
            {selectedRequest.statusHistory && selectedRequest.statusHistory.length > 0 && (
              <div className="border-t border-ivory-200 pt-6 mt-6">
                <h5 className="font-serif text-xs text-charcoal uppercase tracking-wider mb-3">Status Audit Trail</h5>
                <div className="space-y-2">
                  {selectedRequest.statusHistory.map((h, i) => (
                    <div key={i} className="text-[11px] text-taupe flex items-center justify-between border-b border-ivory-100 pb-1">
                      <span>
                        <strong className="text-charcoal">{h.status}</strong> by {h.changedBy}
                        {h.note ? ` — "${h.note}"` : ''}
                      </span>
                      <span>{new Date(h.changedAt).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
