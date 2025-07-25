import { z } from "zod";

// ===== 공통 스키마 =====
export const JwtTokenSchema = z.object({
  grantType: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type JwtToken = z.infer<typeof JwtTokenSchema>;

export const RequestLoginSchema = z.object({
  memberCode: z.string(),
  password: z.string(),
});

export type RequestLogin = z.infer<typeof RequestLoginSchema>;

// ===== API Error Response =====
export const ApiErrorSchema = z.object({
  message: z.string(),
  status: z.number(),
  timestamp: z.string(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;

// ===== API Response Wrapper =====
export const ApiResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
    success: z.boolean(),
    message: z.string().optional(),
  });

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};
