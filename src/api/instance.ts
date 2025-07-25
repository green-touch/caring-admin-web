import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// API 기본 설정
const API_CONFIG = {
  MANAGER_BASE_URL: `${import.meta.env.VITE_API_BASE_URL}/manager-service`,
  USER_BASE_URL: `${import.meta.env.VITE_API_BASE_URL}/user-service`,
} as const;

// JWT 토큰 관리
class TokenManager {
  private static instance: TokenManager;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  private constructor() {}

  static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  getAccessToken(): string | null {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem("accessToken");
    }
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    if (!this.refreshToken) {
      this.refreshToken = localStorage.getItem("refreshToken");
    }
    return this.refreshToken;
  }

  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}

// API 인스턴스 생성 함수
const createApiInstance = (baseURL: string): AxiosInstance => {
  const tokenManager = TokenManager.getInstance();

  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 요청 인터셉터 - JWT 토큰 자동 추가
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = tokenManager.getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터 - 토큰 만료 처리
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: unknown) => {
      const axiosError = error as {
        config: { headers?: Record<string, string>; _retry?: boolean };
        response?: { status: number };
      };
      const originalRequest = axiosError.config;

      if (axiosError.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = tokenManager.getRefreshToken();
        if (refreshToken) {
          try {
            // 리프레시 토큰으로 새로운 액세스 토큰 요청
            const response = await axios.post(
              `${baseURL}/v1/api/access/tokens/refresh`,
              {
                refreshToken,
              }
            );

            const { accessToken, refreshToken: newRefreshToken } =
              response.data;
            tokenManager.setTokens(accessToken, newRefreshToken);

            // 원래 요청 재시도
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            }
            return instance(originalRequest);
          } catch (refreshError) {
            // 리프레시 토큰도 만료된 경우 로그아웃 처리
            tokenManager.clearTokens();
            window.location.href = "/login";
            return Promise.reject(refreshError);
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

// API 인스턴스들
export const managerApi = createApiInstance(API_CONFIG.MANAGER_BASE_URL);
export const userApi = createApiInstance(API_CONFIG.USER_BASE_URL);

// TokenManager 인스턴스 export
export const tokenManager = TokenManager.getInstance();

// 타입 안전한 API 응답 처리 함수
export const handleApiResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

// 타입 안전한 API 에러 처리 함수
export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || error.message;
    throw new Error(message);
  }
  throw error;
};
