import IcEyeRemove from "@_assets/icon/ic_eye_remove.svg?react";
import IcEyeVisible from "@_assets/icon/ic_eye_visible.svg?react";
import IcRemove from "@_assets/icon/ic_remove.svg?react";
import React, { useState } from "react";
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import type { FieldErrors, UseFormSetValue } from "react-hook-form";
import type { UseFormRegister } from 'react-hook-form';
interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    error?: string;
    register?: UseFormRegister<any>;
    name?: string;
    setValue?: UseFormSetValue<any>;
}

const CloseButton = ({ onClick, setValue }: { onClick: () => void, setValue: UseFormSetValue<any> }) => {
    return (
        <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={onClick}
            tabIndex={-1}
        >
            <IcRemove className="w-5 h-5" />
        </button>
    )
}

const PasswordButton = ({ onClick, showPassword, className }: { onClick: () => void, showPassword: boolean, className?: string }) => {
    return (
        <button
            type="button"
            className={`absolute right-10 top-1/2 -translate-y-1/2 ${className}`}
            onClick={onClick}
            tabIndex={-1}
        >
            {showPassword ? <IcEyeVisible className="w-5 h-5" /> : <IcEyeRemove className="w-5 h-5" />}
        </button>
    )
}

const ErrorMessage = ({ error }: { error: string }) => {
    return (
        <p className="text-xs text-red-500 w-full text-lft">{error}</p>
    )
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
    (
        { label, id, type = "text", value, error, name, setValue, onChange, onBlur, onFocus, ...rest },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";
        const inputType = isPassword && showPassword ? "text" : type;
        return (
            <>
                <div className="flex flex-col items-start justify-center gap-2 w-full relative mt-2">
                    <label
                        htmlFor={id}
                        className={`absolute left-3 transition-all duration-200 pointer-events-none
            ${(value && value.length > 0) || isFocused
                                ? "text-xs top-2 text-gray100 -translate-y-0"
                                : "top-1/2 -translate-y-1/2 text-gray-400"}
          `}
                    >
                        {label}
                    </label>
                    <input
                        id={id}
                        type={inputType}
                        value={value}
                        name={name}
                        ref={ref}
                        onChange={onChange}
                        onBlur={(e) => {
                            setIsFocused(false);
                            if (onBlur) onBlur(e);
                        }}
                        onFocus={(e) => {
                            setIsFocused(true);
                            if (onFocus) onFocus(e);
                        }}
                        className={`w-full pt-6 bg-transparent rounded-md border focus:outline-none transition-all px-2 pb-2
                        ${isFocused ? "border-gray100 border-2" : error ? "border-red-500 border" : "border-gray300 border"}
                        placeholder-gray-100
                    `}
                        placeholder={isFocused ? label : ""}
                        autoComplete="off"
                        {...rest}
                    />
                    {value && value.length > 0 && isPassword && (
                        <PasswordButton onClick={() => setShowPassword((v) => !v)} showPassword={showPassword} />
                    )}
                    {value && value.length > 0 && setValue && name && (
                        <CloseButton onClick={() => setValue(name, "")} setValue={setValue} />
                    )}


                </div>
                {error && <ErrorMessage error={error} />}
            </>
        );
    }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput; 