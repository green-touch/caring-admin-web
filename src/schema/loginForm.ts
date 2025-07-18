import { z } from "zod";

// zod 스키마 정의
export const schema = z.object({
  employeeId: z.string().min(1, "사번을 입력해주세요."),
  password: z.string().min(1, "비밀번호를 입력해주세요."),
  remember: z.boolean().optional(),
});

export type FormData = z.infer<typeof schema>;
