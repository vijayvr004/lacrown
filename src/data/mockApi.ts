// Mock API / data adapter for development
// IMPORTANT: This is a DEVELOPMENT MOCK. In production, replace with real backend API calls.
// All data here is sample/demonstration data only.

export type RequestStatus = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';

export interface AppointmentRequest {
  id: string;
  referenceNumber: string;
  customerName: string;
  phone: string;
  email?: string;
  serviceType: 'Aesthetic Clinic' | 'Salon';
  serviceCategory: string;
  serviceName: string;
  serviceId?: string;
  preferredDate: string;
  preferredTime: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email';
  message?: string;
  consentGiven: boolean;
  status: RequestStatus;
  statusHistory: StatusHistoryEntry[];
  assignedStaff?: string;
  internalNotes?: string;
  submittedAt: string;
  updatedAt: string;
}

export interface StatusHistoryEntry {
  status: RequestStatus;
  changedAt: string;
  changedBy: string;
  note?: string;
}

// Local storage key for demo mode
const REQUESTS_KEY = 'lacrown_demo_requests';

// Generate reference number
export const generateReferenceNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `LCR-${timestamp}-${random}`;
};

// DEMO: Get all requests from localStorage
export const getAllRequests = (): AppointmentRequest[] => {
  try {
    const stored = localStorage.getItem(REQUESTS_KEY);
    return stored ? JSON.parse(stored) : getDemoRequests();
  } catch {
    return getDemoRequests();
  }
};

// DEMO: Save request to localStorage
export const saveRequest = (request: AppointmentRequest): void => {
  try {
    const existing = getAllRequests();
    const updated = [request, ...existing];
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Demo storage error:', err);
  }
};

// DEMO: Update request status
export const updateRequestStatus = (
  id: string,
  status: RequestStatus,
  note?: string,
  adminName = 'Administrator'
): AppointmentRequest | null => {
  const requests = getAllRequests();
  const idx = requests.findIndex((r) => r.id === id);
  if (idx === -1) return null;

  const now = new Date().toISOString();
  requests[idx] = {
    ...requests[idx],
    status,
    updatedAt: now,
    statusHistory: [
      ...requests[idx].statusHistory,
      { status, changedAt: now, changedBy: adminName, note },
    ],
  };

  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  return requests[idx];
};

// DEMO: Update request notes
export const updateRequestNotes = (id: string, notes: string): AppointmentRequest | null => {
  const requests = getAllRequests();
  const idx = requests.findIndex((r) => r.id === id);
  if (idx === -1) return null;

  requests[idx] = { ...requests[idx], internalNotes: notes, updatedAt: new Date().toISOString() };
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  return requests[idx];
};

// DEMO: Get dashboard stats
export const getDashboardStats = () => {
  const requests = getAllRequests();
  const today = new Date().toDateString();
  return {
    total: requests.length,
    pending: requests.filter((r) => r.status === 'Pending').length,
    inProgress: requests.filter((r) => r.status === 'In Progress').length,
    completed: requests.filter((r) => r.status === 'Completed').length,
    cancelled: requests.filter((r) => r.status === 'Cancelled').length,
    today: requests.filter((r) => new Date(r.submittedAt).toDateString() === today).length,
  };
};

// DEMO admin credentials (NOT production auth)
export const DEMO_ADMIN = { username: 'admin@lacrown.in', password: 'LaCrown@2024' };

// Demo session
export const checkAdminSession = (): boolean => {
  return sessionStorage.getItem('lacrown_admin_session') === 'authenticated';
};

export const setAdminSession = (): void => {
  sessionStorage.setItem('lacrown_admin_session', 'authenticated');
};

export const clearAdminSession = (): void => {
  sessionStorage.removeItem('lacrown_admin_session');
};

// Demo data
const getDemoRequests = (): AppointmentRequest[] => [
  {
    id: 'demo-001',
    referenceNumber: 'LCR-DEMO-0001',
    customerName: 'Priya Sharma',
    phone: '9876543210',
    email: 'priya@example.com',
    serviceType: 'Aesthetic Clinic',
    serviceCategory: 'Facials & Medi-Facials',
    serviceName: 'HydraFacial',
    preferredDate: '2026-10-28',
    preferredTime: '11:00 AM',
    preferredContact: 'WhatsApp',
    message: 'Looking for a consultation first',
    consentGiven: true,
    status: 'Pending',
    statusHistory: [{ status: 'Pending', changedAt: new Date().toISOString(), changedBy: 'System' }],
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'demo-002',
    referenceNumber: 'LCR-DEMO-0002',
    customerName: 'Rahul Nair',
    phone: '9123456789',
    serviceType: 'Salon',
    serviceCategory: "Men's Haircut & Grooming",
    serviceName: "Men's Haircut — Senior Stylist",
    preferredDate: '2026-10-27',
    preferredTime: '3:00 PM',
    preferredContact: 'Phone',
    consentGiven: true,
    status: 'In Progress',
    statusHistory: [
      { status: 'Pending', changedAt: new Date(Date.now() - 86400000).toISOString(), changedBy: 'System' },
      { status: 'In Progress', changedAt: new Date().toISOString(), changedBy: 'Administrator', note: 'Confirmed with customer' },
    ],
    submittedAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'demo-003',
    referenceNumber: 'LCR-DEMO-0003',
    customerName: 'Anjali Menon',
    phone: '9988776655',
    email: 'anjali@example.com',
    serviceType: 'Aesthetic Clinic',
    serviceCategory: 'Laser Treatments',
    serviceName: 'Laser Hair Removal',
    preferredDate: '2026-10-25',
    preferredTime: '5:00 PM',
    preferredContact: 'Email',
    message: 'Full legs and underarms',
    consentGiven: true,
    status: 'Completed',
    statusHistory: [
      { status: 'Pending', changedAt: new Date(Date.now() - 172800000).toISOString(), changedBy: 'System' },
      { status: 'In Progress', changedAt: new Date(Date.now() - 86400000).toISOString(), changedBy: 'Administrator' },
      { status: 'Completed', changedAt: new Date().toISOString(), changedBy: 'Administrator', note: 'Treatment completed successfully' },
    ],
    internalNotes: 'Customer satisfied. Follow-up session recommended in 6 weeks.',
    submittedAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
