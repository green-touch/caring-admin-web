import IcRadioChecked from "@_assets/icon/ic_radio_checked.svg?react";
import IcRadioDefault from "@_assets/icon/ic_radio_default.svg?react";
import Description from "@_components/common/description";
import FloatingInput from "@_components/login/FloatingInput";
import { schema, type FormData } from "@_schema/loginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: { remember: false },
    });

    const [remember, setRemember] = useState(false);

    // 인풋 포커스 해제용 ref
    const formRef = useRef<HTMLFormElement>(null);

    // watch로 값 추적
    const employeeIdValue = watch("employeeId") || "";
    const passwordValue = watch("password") || "";
    const isActive = employeeIdValue.length > 0 && passwordValue.length > 0;

    const {
        name: employeeIdName,
        onChange: employeeIdOnChange,
        onBlur: employeeIdOnBlur,
        ref: employeeIdRef,
    } = register("employeeId");

    const {
        name: passwordName,
        onChange: passwordOnChange,
        onBlur: passwordOnBlur,
        ref: passwordRef,
    } = register("password");

    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center w-1/2 bg-white rounded-r-2xl px-[40px]">
            <h1 className="text-xl font-bold text-gray90 w-full text-left">관리자 로그인</h1>
            <form
                ref={formRef}
                className="flex flex-col items-center justify-center gap-4 w-full mt-6"
                onSubmit={handleSubmit(() => { navigate("/main", { replace: true }) })}
                autoComplete="off"
            >
                {/* 사번 입력: 플로팅 라벨 */}
                <FloatingInput
                    id="employeeId"
                    label="사번"
                    error={errors.employeeId?.message}
                    value={employeeIdValue}
                    name={employeeIdName}
                    onChange={employeeIdOnChange}
                    onBlur={employeeIdOnBlur}
                    ref={employeeIdRef}
                    setValue={setValue}
                    enableClearButton
                    enablePasswordButton
                />
                {/* 비밀번호 입력: 플로팅 라벨 */}
                <FloatingInput
                    id="password"
                    label="비밀번호"
                    type="password"
                    error={errors.password?.message}
                    value={passwordValue}
                    name={passwordName}
                    onChange={passwordOnChange}
                    onBlur={passwordOnBlur}
                    ref={passwordRef}
                    setValue={setValue}
                    enableClearButton
                    enablePasswordButton
                />
                {/* 로그인 상태 유지 체크박스 */}
                <div className="flex flex-row items-center justify-start gap-2 w-full">
                    <button
                        type="button"
                        className="w-5 h-5 flex items-center justify-center"
                        onClick={() => setRemember(v => !v)}
                        tabIndex={0}
                    >
                        {remember ? <IcRadioChecked className="w-5 h-5" /> : <IcRadioDefault className="w-5 h-5" />}
                    </button>
                    <label htmlFor="remember" className="text-md text-gray90 select-none cursor-pointer" onClick={() => setRemember(v => !v)}>
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
                <Description className="mt-6 w-full">
                    <ul className="list-disc pl-4 space-y-2 w-full">
                        <li>
                            <Description.BlueBoldText text="기관에서 배정받은 사번이 없는 경우" /> 기관 담당자에게 요청해 주세요
                        </li>
                        <li>
                            <Description.BlueBoldText text="비밀번호를 분실한 경우" /> 기관 담당자에게 확인 요청해 주세요
                        </li>
                    </ul>
                </Description>
            </form>

        </section>
    );
}
