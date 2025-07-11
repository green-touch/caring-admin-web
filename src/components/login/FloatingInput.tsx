import IcEyeRemove from "@_assets/icon/ic_eye_remove.svg?react";
import IcEyeVisible from "@_assets/icon/ic_eye_visible.svg?react";
import IcRemove from "@_assets/icon/ic_remove.svg?react";
import React, { useState } from "react";
import type { InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    type?: string;
    value?: string;
    error?: string;
    register?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
    (
        { label, id, type = "text", value, error, register, onChange, ...rest },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";
        const inputType = isPassword && showPassword ? "text" : type;
        return (
            <div className="flex flex-col items-start justify-center gap-2 w-full relative mt-2">
                <label
                    htmlFor={id}
                    className={`absolute left-3 transition-all duration-200 pointer-events-none
            ${(value && value.length > 0) || isFocused
                            ? "text-xs top-2 text-main600 -translate-y-0"
                            : "top-1/2 -translate-y-1/2 text-gray-400"}
          `}
                >
                    {label}
                </label>
                <input
                    id={id}
                    type={inputType}
                    value={value}
                    ref={ref}
                    className={`w-full pt-6 bg-transparent rounded-md border focus:outline-none transition-all
                        ${isFocused ? "border-gray100 border-2" : error ? "border-red-500 border" : "border-gray300 border"}
                        placeholder-gray-100
                    `}
                    placeholder={isFocused ? label : ""}
                    autoComplete="off"
                    {...(register ? register : {})}
                    {...rest}
                    onFocus={(e) => {
                        setIsFocused(true);
                        if (rest.onFocus) rest.onFocus(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        if (rest.onBlur) rest.onBlur(e);
                    }}
                    onChange={onChange}
                />
                {/* 오른쪽 아이콘 영역 */}
                {value && value.length > 0 && (
                    <button
                        type="button"
                        className="absolute right-10 top-1/2 -translate-y-1/2"
                        onClick={() => onChange && onChange({ target: { value: "" } } as any)}
                        tabIndex={-1}
                    >
                        <IcRemove className="w-5 h-5" />
                    </button>
                )}
                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword((v) => !v)}
                        tabIndex={-1}
                    >
                        {showPassword ? <IcEyeVisible className="w-5 h-5" /> : <IcEyeRemove className="w-5 h-5" />}
                    </button>
                )}
                {error && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput; 