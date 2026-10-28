/**
 * La Crown Luxury Aesthetic Clinic & Salon
 * Centralized API Communication Service
 */

export interface AppointmentPayload {
  name: string;
  phone: string;
  email?: string;
  service: string;
  serviceCategory?: string;
  doctor?: string;
  date: string;
  time: string;
  preferredContact?: string;
  notes?: string;
}

export interface FranchisePayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  investment: string;
  notes?: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  reference?: string;
  token?: string;
  data?: T;
  error?: string;
}

export interface AdminStats {
  total: number;
  pending: number;
  appointments: number;
  franchise: number;
  contact: number;
}

export interface AdminOverviewData {
  databaseConnected: boolean;
  stats: AdminStats;
  appointments: any[];
  franchise: any[];
  contact: any[];
}

// Resolve API Base URL gracefully across Development and Production
export const getApiBaseUrl = (): string => {
  // 1. Environment variable (Vite)
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim()) {
    return envUrl.trim().replace(/\/+$/, '');
  }

  // 2. Global runtime config (window.__CONFIG__)
  if (typeof window !== 'undefined' && (window as any).__CONFIG__?.API_BASE_URL) {
    return (window as any).__CONFIG__.API_BASE_URL.trim().replace(/\/+$/, '');
  }

  // 3. In development Vite proxy, default to '/api'
  // In production if VITE_API_BASE_URL is not set, default to '/api'
  return '/api';
};

/**
 * Low-level HTTP helper with timeout, error extraction, and fallback safety
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  adminKey?: string
): Promise<ApiResponse<T>> {
  const baseUrl = getApiBaseUrl();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${cleanEndpoint}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (adminKey) {
    headers['X-Admin-Key'] = adminKey;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second timeout

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg = data?.message || `Server responded with status ${response.status}`;
      return {
        success: false,
        message: errorMsg,
        error: errorMsg,
      };
    }

    return {
      success: data?.success ?? true,
      message: data?.message || 'Operation successful',
      reference: data?.reference,
      token: data?.token,
      data: data?.data ?? data,
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    const isAbort = err.name === 'AbortError';
    const message = isAbort
      ? 'Request timed out. Please check your internet connection and try again.'
      : (err.message || 'Network connection failed. Please ensure backend service is running.');

    return {
      success: false,
      message,
      error: message,
    };
  }
}

/**
 * High-level API Service
 */
export const ApiService = {
  /**
   * Health Check
   */
  async checkHealth(): Promise<any> {
    const baseUrl = getApiBaseUrl().replace(/\/api$/, '');
    try {
      const res = await fetch(`${baseUrl}/health`);
      return await res.json();
    } catch (err: any) {
      return { status: 'unreachable', error: err.message };
    }
  },

  /**
   * Submit Private Consultation / Appointment Booking
   */
  async submitAppointment(payload: AppointmentPayload): Promise<ApiResponse> {
    return apiFetch('/appointments', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  /**
   * Submit Franchise Opportunity Expression of Interest
   */
  async submitFranchiseEnquiry(payload: FranchisePayload): Promise<ApiResponse> {
    return apiFetch('/enquiries/franchise', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  /**
   * Submit General Contact Enquiry Message
   */
  async submitContactMessage(payload: ContactPayload): Promise<ApiResponse> {
    return apiFetch('/enquiries/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  /**
   * Admin Login Authentication
   */
  async adminLogin(credentials: { username?: string; password?: string; secretKey?: string }): Promise<ApiResponse> {
    return apiFetch('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  /**
   * Retrieve Admin Portal Overview & Requests
   */
  async getAdminOverview(adminKey: string): Promise<ApiResponse<AdminOverviewData>> {
    return apiFetch<AdminOverviewData>('/admin/overview', { method: 'GET' }, adminKey);
  },

  /**
   * Update Appointment Status
   */
  async updateAppointmentStatus(id: string | number, status: string, adminKey: string): Promise<ApiResponse> {
    return apiFetch(`/appointments/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }, adminKey);
  },

  /**
   * Update Appointment Notes
   */
  async updateAppointmentNotes(id: string | number, notes: string, adminKey: string): Promise<ApiResponse> {
    return apiFetch(`/appointments/${id}/notes`, {
      method: 'PATCH',
      body: JSON.stringify({ notes }),
    }, adminKey);
  },

  /**
   * Update Franchise Status
   */
  async updateFranchiseStatus(id: string | number, status: string, adminKey: string): Promise<ApiResponse> {
    return apiFetch(`/enquiries/franchise/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }, adminKey);
  },
};
