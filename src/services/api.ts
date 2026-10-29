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

export interface AcademyPayload {
  name: string;
  phone: string;
  email?: string;
  course: string;
  trainingProgramme?: string;
  preferredBatch?: string;
  preferredStartDate?: string;
  educationQualification?: string;
  experience?: string;
  message?: string;
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
  let envUrl = import.meta.env.VITE_API_BASE_URL;

  // Runtime window config override if provided
  if (!envUrl && typeof window !== 'undefined' && (window as any).__CONFIG__?.API_BASE_URL) {
    envUrl = (window as any).__CONFIG__.API_BASE_URL;
  }

  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // If no environment variable is provided:
  if (!envUrl || typeof envUrl !== 'string' || !envUrl.trim()) {
    if (isLocalhost) {
      return '/api'; // Proxied by Vite to http://localhost:8000/api
    }
    // Production default: Target the deployed La Crown Render backend directly
    return 'https://lacrown-7a01.onrender.com/api';
  }

  let cleanUrl = envUrl.trim().replace(/\/+$/, '');

  // If origin was provided without /api (e.g. https://lacrown-7a01.onrender.com), normalize with /api
  if (cleanUrl.startsWith('http') && !cleanUrl.endsWith('/api')) {
    cleanUrl = `${cleanUrl}/api`;
  }

  return cleanUrl;
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
  let cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  // Prevent accidental /api/api duplicate prefix
  if (baseUrl.endsWith('/api') && cleanEndpoint.startsWith('/api/')) {
    cleanEndpoint = cleanEndpoint.slice(4);
  } else if (baseUrl.endsWith('/api') && cleanEndpoint === '/api') {
    cleanEndpoint = '';
  }

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
    const baseUrl = getApiBaseUrl().replace(/\/api\/?$/, '');
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
   * Submit Academy Enrolment & Training Programme Enquiry
   */
  async submitAcademyEnquiry(payload: AcademyPayload): Promise<ApiResponse> {
    return apiFetch('/academy', {
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
