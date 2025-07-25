import { z } from "zod";

import type { JwtToken } from "./common";

// ===== Request Schemas =====
export const RequestShelterSchema = z.object({
  location: z.string(),
  name: z.string(),
});

export type RequestShelter = z.infer<typeof RequestShelterSchema>;

export const RequestManagerSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export type RequestManager = z.infer<typeof RequestManagerSchema>;

export const EditManagerInformSchema = z.object({
  email: z.string(),
  phoneNumber: z.string(),
});

export type EditManagerInform = z.infer<typeof EditManagerInformSchema>;

// ===== Response Schemas =====
export const ResponseAuthoritySchema = z.object({
  roles: z.array(z.string()),
});

export type ResponseAuthority = z.infer<typeof ResponseAuthoritySchema>;

export const ResponseManagerSchema = z.object({
  managerUuid: z.string(),
  name: z.string(),
  managerCode: z.string(),
  shelterUuid: z.string(),
});

export type ResponseManager = z.infer<typeof ResponseManagerSchema>;

export const ResponseSpecificManagerSchema = z.object({
  responseManager: ResponseManagerSchema,
  responseAuthority: ResponseAuthoritySchema,
  email: z.string(),
  phoneNumber: z.string(),
});

export type ResponseSpecificManager = z.infer<
  typeof ResponseSpecificManagerSchema
>;

export const ResponseManagerAccountSchema = z.object({
  memberCode: z.string(),
  name: z.string(),
  managerUuid: z.string(),
});

export type ResponseManagerAccount = z.infer<
  typeof ResponseManagerAccountSchema
>;

// ===== Manager API Response Types =====
export const ManagerLoginResponseSchema = z.object({
  grantType: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});
export type ManagerLoginResponse = JwtToken;

export const ManagerProfileResponseSchema = ResponseSpecificManagerSchema;
export type ManagerProfileResponse = z.infer<
  typeof ManagerProfileResponseSchema
>;

export const ManagerAccountListResponseSchema = z.array(
  ResponseManagerAccountSchema
);
export type ManagerAccountListResponse = z.infer<
  typeof ManagerAccountListResponseSchema
>;

export const SuperAuthListResponseSchema = z.array(
  z.enum([
    "GRANT_SUPER_MANAGER_PERMISSION",
    "REQUEST_WELFARE_CENTER_ACCOUNT_MODIFICATION",
    "CREATE_MANAGER_ACCOUNT",
    "DELETE_MANAGER_ACCOUNT",
    "ASSIGN_OR_DELETE_SENIOR_ALLOCATION",
    "CREATE_OR_DELETE_SENIOR_ACCOUNT",
  ])
);
export type SuperAuthListResponse = z.infer<typeof SuperAuthListResponseSchema>;
