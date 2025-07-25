import { managerKeys } from "@_api/constants/queryKeys";
import {
  registerShelter,
  registerDefaultManager,
  registerSuperManager,
  loginManager,
  switchSuperAuth,
  editManagerInformation,
} from "@_api/manager";
import type { RequestShelter, EditManagerInform } from "@_types/api/manager";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ===== Queries =====

/**
 * 매니저 프로필 정보를 조회합니다.
 */
export const useManagerProfile = (managerCode: string) => {
  return useQuery({
    ...managerKeys.profile({ managerCode }),
    enabled: !!managerCode,
  });
};

/**
 * super 권한 enum을 조회합니다.
 */
export const useSuperAuth = () => {
  return useQuery(managerKeys.superAuth());
};

/**
 * manager의 memberCode, password를 확인합니다. 개발용입니다.
 */
export const useManagerAccounts = () => {
  return useQuery(managerKeys.accounts());
};

/**
 * 서버 상태 확인
 */
export const useManagerHealthCheck = () => {
  return useQuery(managerKeys.health());
};

/**
 * 환영 메시지
 */
export const useManagerWelcome = () => {
  return useQuery(managerKeys.welcome());
};

// ===== Mutations =====

/**
 * 보호소를 등록합니다.
 */
export const useRegisterShelter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      memberCode,
      requestShelter,
    }: {
      memberCode: string;
      requestShelter: RequestShelter;
    }) => registerShelter(memberCode, requestShelter),
    onSuccess: () => {
      // 보호소 등록 후 관련 쿼리 무효화
      queryClient.invalidateQueries(managerKeys.all);
    },
  });
};

/**
 * 일반 매니저 계정을 생성합니다.
 */
export const useRegisterDefaultManager = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerDefaultManager,
    onSuccess: () => {
      queryClient.invalidateQueries(managerKeys.accounts());
    },
  });
};

/**
 * super 권한을 모두 가진 manager를 생성합니다. 테스트용입니다.
 */
export const useRegisterSuperManager = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerSuperManager,
    onSuccess: () => {
      queryClient.invalidateQueries(managerKeys.accounts());
    },
  });
};

/**
 * 매니저가 로그인을 합니다.
 */
export const useLoginManager = () => {
  return useMutation({
    mutationFn: ({
      memberCode,
      password,
    }: {
      memberCode: string;
      password: string;
    }) => loginManager(memberCode, password),
  });
};

/**
 * 특정 매니저를 권한 조정합니다.
 */
export const useSwitchSuperAuth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      managerUuid,
      superAuthList,
    }: {
      managerUuid: string;
      superAuthList: string[];
    }) => switchSuperAuth(managerUuid, superAuthList),
    onSuccess: () => {
      queryClient.invalidateQueries(managerKeys.superAuth());
    },
  });
};

/**
 * 매니저 프로필 정보를 수정합니다.
 */
export const useEditManagerInformation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      managerCode,
      editManagerInform,
    }: {
      managerCode: string;
      editManagerInform: EditManagerInform;
    }) => editManagerInformation(managerCode, editManagerInform),
    onSuccess: (_, { managerCode }) => {
      queryClient.invalidateQueries(managerKeys.profile({ managerCode }));
    },
  });
};
