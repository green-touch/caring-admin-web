import {
  getManagerProfile,
  getAllSuperAuth,
  getManagerAccountForTest,
  getManagerHealthCheck,
  getManagerWelcome,
} from "@_api/manager";
import {
  getUserProfile,
  getMyInfo,
  getHomeInfo,
  getUserShelterUuid,
  getAllUsers,
  getUserHealthCheck,
  getUserWelcome,
} from "@_api/user";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const managerKeys = createQueryKeys("manager", {
  all: null,
  profile: ({ managerCode }: { managerCode: string }) => ({
    queryKey: ["profile", managerCode],
    queryFn: () => getManagerProfile(managerCode),
  }),
  superAuth: () => ({
    queryKey: ["superAuth"],
    queryFn: getAllSuperAuth,
  }),
  accounts: () => ({
    queryKey: ["accounts"],
    queryFn: getManagerAccountForTest,
  }),
  health: () => ({
    queryKey: ["health"],
    queryFn: getManagerHealthCheck,
  }),
  welcome: () => ({
    queryKey: ["welcome"],
    queryFn: getManagerWelcome,
  }),
});

export const userKeys = createQueryKeys("user", {
  all: null,
  profile: ({ memberCode }: { memberCode: string }) => ({
    queryKey: ["profile", memberCode],
    queryFn: () => getUserProfile(memberCode),
  }),
  myInfo: ({ memberCode }: { memberCode: string }) => ({
    queryKey: ["myInfo", memberCode],
    queryFn: () => getMyInfo(memberCode),
  }),
  homeInfo: ({ memberCode }: { memberCode: string }) => ({
    queryKey: ["homeInfo", memberCode],
    queryFn: () => getHomeInfo(memberCode),
  }),
  shelterUuid: ({ userUuid }: { userUuid: string }) => ({
    queryKey: ["shelterUuid", userUuid],
    queryFn: () => getUserShelterUuid(userUuid),
  }),
  list: () => ({
    queryKey: ["list"],
    queryFn: getAllUsers,
  }),
  health: () => ({
    queryKey: ["health"],
    queryFn: getUserHealthCheck,
  }),
  welcome: () => ({
    queryKey: ["welcome"],
    queryFn: getUserWelcome,
  }),
});

export const queryKeys = {
  manager: managerKeys,
  user: userKeys,
} as const;
