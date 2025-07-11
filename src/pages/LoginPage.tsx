import CenteralizedVerticalContainer from "@_components/common/containers/CenteralizedVerticalContainer";
import FloatingInput from "@_components/login/FloatingInput";
import LoginFooter from "@_components/login/LoginFooter";
import LoginHeader from "@_components/login/LoginHeader";
import { LoginImageSection } from "@_components/login/LoginImageSection";
import { zodResolver } from "@hookform/resolvers/zod";
import IcRadioChecked from "@_assets/icon/ic_radio_checked.svg?react";
import IcRadioDefault from "@_assets/icon/ic_radio_default.svg?react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const LoginForm = () => {
  // zod 스키마 정의
  const schema = z.object({
    employeeId: z.string().min(1, "사번을 입력해주세요."),
    password: z.string().min(1, "비밀번호를 입력해주세요."),
    remember: z.boolean().optional(),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { remember: false },
  });

  const employeeId = watch("employeeId");
  const password = watch("password");

  const [employeeIdValue, setEmployeeIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [remember, setRemember] = useState(false);

  // 인풋 포커스 해제용 ref
  const formRef = useRef<HTMLFormElement>(null);

  const isActive = employeeIdValue.length > 0 && passwordValue.length > 0;

  return (
    <section className="flex flex-col items-center justify-center w-1/2 bg-white rounded-r-2xl px-[40px]">
      <h1 className="text-2xl font-bold text-gray90 w-full text-left">관리자 로그인</h1>
      <form
        ref={formRef}
        className="flex flex-col items-center justify-center gap-4 w-full"
        onSubmit={handleSubmit(() => {/* 로그인 처리 */ })}
        autoComplete="off"
      >
        {/* 사번 입력: 플로팅 라벨 */}
        <FloatingInput
          id="employeeId"
          label="사번"
          value={employeeIdValue}
          error={errors.employeeId?.message}
          register={register("employeeId")}
          onChange={e => {
            setEmployeeIdValue(e.target.value);
          }}
        />
        {/* 비밀번호 입력: 플로팅 라벨 */}
        <FloatingInput
          id="password"
          label="비밀번호"
          type="password"
          value={passwordValue}
          error={errors.password?.message}
          register={register("password")}
          onChange={e => {
            setPasswordValue(e.target.value);
          }}
        />
        {/* 로그인 상태 유지 체크박스 */}
        <div className="flex flex-row items-center justify-center gap-2 w-full">
          <button
            type="button"
            className="w-4 h-4 flex items-center justify-center"
            onClick={() => setRemember(v => !v)}
            tabIndex={0}
          >
            {remember ? <IcRadioChecked className="w-4 h-4" /> : <IcRadioDefault className="w-4 h-4" />}
          </button>
          <label htmlFor="remember" className="text-sm text-gray90 select-none cursor-pointer" onClick={() => setRemember(v => !v)}>
            로그인 상태 유지
          </label>
        </div>
        <button
          type="submit"
          className={`w-full p-2 rounded-md text-white transition-colors ${isActive ? "bg-main900" : "bg-gray10"}`}
          disabled={!isActive}
        >
          로그인
        </button>
      </form>
    </section>
  );
}

// main 바깥 클릭 시 인풋 포커스 해제
export default function LoginPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const handleMainClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === mainRef.current) {
      // 모든 인풋 포커스 해제
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  };
  return (
    <CenteralizedVerticalContainer className="min-h-screen flex flex-col bg-background">
      <LoginHeader />
      <main
        ref={mainRef}
        className="flex flex-1 flex-row w-full px-[116px] mt-10 mb-10"
        onClick={handleMainClick}
      >
        <LoginImageSection />
        <LoginForm />
      </main>
      <LoginFooter />
    </CenteralizedVerticalContainer>
  );
}
