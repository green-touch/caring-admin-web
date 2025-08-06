import type {
  RequestEmergencyContact,
  RequestUser,
  UserLoginResponse,
  UserProfileResponse,
  UserHomeInfoResponse,
  UserListResponse,
  UserShelterUuidResponse,
  MemberCodeResponse,
} from "../../types/api";
import { userApi, handleApiResponse, handleApiError } from "../instance";

// ===== 유저 계정 관리 =====

/**
 * 새로운 유저를 등록합니다.
 */
export const registerUser = async (
  requestUser: RequestUser
): Promise<string> => {
  try {
    const response = await userApi.post(
      "/v1/api/access/users/register",
      requestUser
    );
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 모든 유저 목록을 조회합니다.
 */
export const getAllUsers = async (): Promise<UserListResponse> => {
  try {
    const response = await userApi.get("/v1/api/access/users");
    return handleApiResponse<UserListResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 로그인/인증 =====

/**
 * 유저가 로그인을 합니다.
 */
export const loginUser = async (
  memberCode: string,
  password: string
): Promise<UserLoginResponse> => {
  try {
    const response = await userApi.post("/v1/api/access/tokens/users", {
      memberCode,
      password,
    });
    return handleApiResponse<UserLoginResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 비밀번호 관리 =====

/**
 * 핸드폰 인증을 통해 내 memberCode를 조회합니다.
 */
export const findMyMemberCode = async (
  name: string,
  birthDate: string,
  phoneNumber: string
): Promise<MemberCodeResponse> => {
  try {
    const response = await userApi.post("/v1/api/access/users/my/member-code", {
      name,
      birthDate,
      phoneNumber,
    });
    return handleApiResponse<MemberCodeResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 비밀번호 재설정 (휴대폰 인증 완료 후)
 */
export const resetPassword = async (
  memberCode: string,
  newPassword: string
): Promise<void> => {
  try {
    const response = await userApi.post(
      "/v1/api/access/users/my/reset-password",
      {
        memberCode,
        newPassword,
      }
    );
    return handleApiResponse<void>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 프로필 관리 =====

/**
 * 특정 유저의 계정을 조회합니다.
 */
export const getUserProfile = async (
  memberCode: string
): Promise<UserProfileResponse> => {
  try {
    const response = await userApi.get(`/v1/api/users/${memberCode}`);
    return handleApiResponse<UserProfileResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 내 정보를 조회합니다. (홈 화면 X)
 */
export const getMyInfo = async (
  memberCode: string
): Promise<UserProfileResponse> => {
  try {
    const response = await userApi.get("/v1/api/users/my/info", {
      params: { memberCode },
    });
    return handleApiResponse<UserProfileResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 경량화된 내 정보(비상연락망 포함x)를 조회합니다. (홈 화면 O)
 */
export const getHomeInfo = async (
  memberCode: string
): Promise<UserHomeInfoResponse> => {
  try {
    const response = await userApi.get("/v1/api/users/home/info", {
      params: { memberCode },
    });
    return handleApiResponse<UserHomeInfoResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 특정 유저의 shelterUuid를 반환합니다.
 */
export const getUserShelterUuid = async (
  userUuid: string
): Promise<UserShelterUuidResponse> => {
  try {
    const response = await userApi.get(`/v1/api/users/${userUuid}/shelterUuid`);
    return handleApiResponse<UserShelterUuidResponse>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 비상연락망 관리 =====

/**
 * 유저가 비상연락망 직접 추가 beta (관리자가 추가 하는건 권한 문제 해결후 처리예정)
 */
export const saveEmergencyContacts = async (
  requestEmergencyContact: RequestEmergencyContact
): Promise<void> => {
  try {
    const response = await userApi.post(
      "/v1/api/users/emergency-contacts",
      requestEmergencyContact
    );
    return handleApiResponse<void>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

// ===== 공통 API =====

/**
 * 서버 상태 확인
 */
export const getUserHealthCheck = async (): Promise<string> => {
  try {
    const response = await userApi.get("/health_check");
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};

/**
 * 환영 메시지
 */
export const getUserWelcome = async (): Promise<string> => {
  try {
    const response = await userApi.get("/welcome");
    return handleApiResponse<string>(response);
  } catch (error) {
    throw handleApiError(error);
  }
};
