import { userKeys } from "@_api/constants/queryKeys";
import {
  registerUser,
  loginUser,
  findMyMemberCode,
  resetPassword,
  saveEmergencyContacts,
} from "@_api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// ===== Queries =====

/**
 * 특정 유저의 계정을 조회합니다.
 */
export const useUserProfile = (memberCode: string) => {
  return useQuery({
    ...userKeys.profile({ memberCode }),
    enabled: !!memberCode,
  });
};

/**
 * 내 정보를 조회합니다. (홈 화면 X)
 */
export const useMyInfo = (memberCode: string) => {
  return useQuery({
    ...userKeys.myInfo({ memberCode }),
    enabled: !!memberCode,
  });
};

/**
 * 경량화된 내 정보(비상연락망 포함x)를 조회합니다. (홈 화면 O)
 */
export const useHomeInfo = (memberCode: string) => {
  return useQuery({
    ...userKeys.homeInfo({ memberCode }),
    enabled: !!memberCode,
  });
};

/**
 * 특정 유저의 shelterUuid를 반환합니다.
 */
export const useUserShelterUuid = (userUuid: string) => {
  return useQuery({
    ...userKeys.shelterUuid({ userUuid }),
    enabled: !!userUuid,
  });
};

/**
 * 모든 유저 목록을 조회합니다.
 */
export const useAllUsers = () => {
  return useQuery(userKeys.list());
};

/**
 * 서버 상태 확인
 */
export const useUserHealthCheck = () => {
  return useQuery(userKeys.health());
};

/**
 * 환영 메시지
 */
export const useUserWelcome = () => {
  return useQuery(userKeys.welcome());
};

// ===== Mutations =====

/**
 * 새로운 유저를 등록합니다.
 */
export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.list().queryKey });
    },
  });
};

/**
 * 유저가 로그인을 합니다.
 */
export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({
      memberCode,
      password,
    }: {
      memberCode: string;
      password: string;
    }) => loginUser(memberCode, password),
  });
};

/**
 * 핸드폰 인증을 통해 내 memberCode를 조회합니다.
 */
export const useFindMyMemberCode = () => {
  return useMutation({
    mutationFn: ({
      name,
      birthDate,
      phoneNumber,
    }: {
      name: string;
      birthDate: string;
      phoneNumber: string;
    }) => findMyMemberCode(name, birthDate, phoneNumber),
  });
};

/**
 * 비밀번호 재설정 (휴대폰 인증 완료 후)
 */
export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({
      memberCode,
      newPassword,
    }: {
      memberCode: string;
      newPassword: string;
    }) => resetPassword(memberCode, newPassword),
  });
};

/**
 * 유저가 비상연락망 직접 추가 beta
 */
export const useSaveEmergencyContacts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveEmergencyContacts,
    onSuccess: (_, variables) => {
      // 비상연락망 추가 후 관련 유저 정보 쿼리 무효화
      queryClient.invalidateQueries(
        userKeys.profile({ memberCode: variables.memberCode })
      );
      queryClient.invalidateQueries(
        userKeys.myInfo({ memberCode: variables.memberCode })
      );
    },
  });
};
