import React from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    type?: string;
    value?: string;
    error?: string;
    register?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { label, id, type = "text", value, error, register, ...rest },
        ref
    ) => {
        return (
            <div className="flex flex-col items-start justify-center gap-2 w-full relative mt-2">
                {label && (
                    <label htmlFor={id} className="text-sm text-gray90 mb-1">
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    type={type}
                    value={value}
                    ref={ref}
                    className={`w-full p-2 rounded-md border focus:outline-none
            ${error ? "border-red-500" : "border-gray300 focus:border-main600"}
          `}
                    autoComplete="off"
                    {...(register ? register : {})}
                    {...rest}
                />
                {error && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input; 