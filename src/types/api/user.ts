import { z } from "zod";

import type { JwtToken } from "./common";

// ===== Request Schemas =====
export const RequestEmergencyContactSchema = z.object({
  memberCode: z.string(),
  contactName: z.string(),
  contactRelationship: z.string(),
  contactPhoneNumber: z.string(),
});

export type RequestEmergencyContact = z.infer<
  typeof RequestEmergencyContactSchema
>;

export const RequestUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  birthdate: z.string(),
  roadAddress: z.string(),
  detailAddress: z.string(),
});

export type RequestUser = z.infer<typeof RequestUserSchema>;

export const RequestResetPasswordSchema = z.object({
  memberCode: z.string(),
  newPassword: z.string(),
});

export type RequestResetPassword = z.infer<typeof RequestResetPasswordSchema>;

export const RequestMemberCodeSchema = z.object({
  name: z.string(),
  birthDate: z.string(),
  phoneNumber: z.string(),
});

export type RequestMemberCode = z.infer<typeof RequestMemberCodeSchema>;

// ===== Response Schemas =====
export const ResponseMemberCodeSchema = z.object({
  name: z.string(),
  memberCode: z.string(),
});

export type ResponseMemberCode = z.infer<typeof ResponseMemberCodeSchema>;

export const ResponseUserShelterUuidSchema = z.object({
  shelterUuid: z.string(),
});

export type ResponseUserShelterUuid = z.infer<
  typeof ResponseUserShelterUuidSchema
>;

export const ResponseEmergencyContactSchema = z.object({
  contactName: z.string(),
  contactRelationship: z.string(),
  contactPhoneNumber: z.string(),
});

export type ResponseEmergencyContact = z.infer<
  typeof ResponseEmergencyContactSchema
>;

export const ResponseUserSchema = z.object({
  name: z.string(),
  memberCode: z.string(),
  userUuid: z.string(),
  shelterUuid: z.string(),
  profileImageUrl: z.string(),
  emergencyContacts: z.array(ResponseEmergencyContactSchema),
});

export type ResponseUser = z.infer<typeof ResponseUserSchema>;

export const ResponseUserHomeInfoSchema = z.object({
  name: z.string(),
  userUuid: z.string(),
  shelterUuid: z.string(),
  profileImageUrl: z.string(),
});

export type ResponseUserHomeInfo = z.infer<typeof ResponseUserHomeInfoSchema>;

// ===== User API Response Types =====
export const UserLoginResponseSchema = z.object({
  grantType: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});
export type UserLoginResponse = JwtToken;

export const UserProfileResponseSchema = ResponseUserSchema;
export type UserProfileResponse = z.infer<typeof UserProfileResponseSchema>;

export const UserHomeInfoResponseSchema = ResponseUserHomeInfoSchema;
export type UserHomeInfoResponse = z.infer<typeof UserHomeInfoResponseSchema>;

export const UserListResponseSchema = z.array(ResponseUserSchema);
export type UserListResponse = z.infer<typeof UserListResponseSchema>;

export const UserShelterUuidResponseSchema = ResponseUserShelterUuidSchema;
export type UserShelterUuidResponse = z.infer<
  typeof UserShelterUuidResponseSchema
>;

export const MemberCodeResponseSchema = ResponseMemberCodeSchema;
export type MemberCodeResponse = z.infer<typeof MemberCodeResponseSchema>;
