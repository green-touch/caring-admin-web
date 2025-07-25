import type {
  RequestShelter,
  RequestManager,
  EditManagerInform,
  ManagerLoginResponse,
  ManagerProfileResponse,
  ManagerAccountListResponse,
  SuperAuthListResponse,
} from "../../types/api";
import { managerApi, handleApiResponse, handleApiError } from "../instance";

// ===== 보호소 관리 =====

/**
 * 보호소를 등록합니다. 등록자(매니저)의 권한은 SUPER가 존재해야 합니다.
 */
export const registerShelter = async (
  memberCode: string,
  requestShelter: RequestShelter
): Promise<number> => {
  try {
    const response = await managerApi.post("/v1/api/shelters", {
      memberCode,
      requestShelter,
    });
    return handleApiResponse<number>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 매니저 계정 관리 =====

/**
 * 일반 매니저 계정을 생성합니다. 생성자는 매니저 생성 권한이 필요합니다.
 */
export const registerDefaultManager = async (
  requestManager: RequestManager
): Promise<number> => {
  try {
    const response = await managerApi.post(
      "/v1/api/managers/default",
      requestManager
    );
    return handleApiResponse<number>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * super 권한을 모두 가진 manager를 생성합니다. 테스트용입니다.
 */
export const registerSuperManager = async (
  requestManager: RequestManager
): Promise<number> => {
  try {
    const response = await managerApi.post(
      "/v1/api/access/managers/super",
      requestManager
    );
    return handleApiResponse<number>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 로그인/인증 =====

/**
 * 매니저가 로그인을 합니다.
 */
export const loginManager = async (
  memberCode: string,
  password: string
): Promise<ManagerLoginResponse> => {
  try {
    const response = await managerApi.post(
      "/v1/api/access/tokens/managers/login",
      {
        memberCode,
        password,
      }
    );
    return handleApiResponse<ManagerLoginResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 권한 관리 =====

/**
 * 특정 매니저를 권한 조정합니다.
 */
export const switchSuperAuth = async (
  managerUuid: string,
  superAuthList: string[]
): Promise<string> => {
  try {
    const response = await managerApi.patch(
      `/v1/api/super-authorities/${managerUuid}`,
      null,
      {
        params: { superAuthList },
      }
    );
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * super 권한 enum을 조회합니다.
 */
export const getAllSuperAuth = async (): Promise<SuperAuthListResponse> => {
  try {
    const response = await managerApi.get("/v1/api/access/managers/roles");
    return handleApiResponse<SuperAuthListResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 프로필 관리 =====

/**
 * 매니저의 프로필 정보를 조회합니다.
 */
export const getManagerProfile = async (
  managerCode: string
): Promise<ManagerProfileResponse> => {
  try {
    const response = await managerApi.get("/v1/api/managers/profiles", {
      params: { managerCode },
    });
    return handleApiResponse<ManagerProfileResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 매니저 프로필 정보를 수정합니다.
 */
export const editManagerInformation = async (
  managerCode: string,
  editManagerInform: EditManagerInform
): Promise<number> => {
  try {
    const response = await managerApi.patch("/v1/api/managers/profiles", {
      managerCode,
      editManagerInform,
    });
    return handleApiResponse<number>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 개발용 API =====

/**
 * manager의 memberCode, password를 확인합니다. 개발용입니다.
 */
export const getManagerAccountForTest =
  async (): Promise<ManagerAccountListResponse> => {
    try {
      const response = await managerApi.get("/v1/api/access/managers/tests");
      return handleApiResponse<ManagerAccountListResponse>(response);
    } catch (error) {
      throw handleApiError(error);
    }
  };

// ===== 공통 API =====

/**
 * 서버 상태 확인
 */
export const getManagerHealthCheck = async (): Promise<string> => {
  try {
    const response = await managerApi.get("/health_check");
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 환영 메시지
 */
export const getManagerWelcome = async (): Promise<string> => {
  try {
    const response = await managerApi.get("/welcome");
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};
