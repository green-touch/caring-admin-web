import React from "react";

const Paragraph = ({ description, className }: { description: string, className?: string }) => {
    return (
        <p className={`text-sm text-gray90 ${className}`}>
            {description}
        </p>
    )
}

const BlueBoldText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <span className={`text-main900 font-bold text-sm ${className}`}>
            {text}
        </span>
    )
}

// DescriptionProps 타입 정의
interface DescriptionProps {
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

const Description = ({ description, children, className }: DescriptionProps) => {
    return (
        <div className={`flex flex-col items-center justify-center bg-gray5 rounded-2xl p-4 text-sm ${className}`}>
            {description ? <Paragraph description={description} /> : children}
        </div>
    )
}

Description.Paragraph = Paragraph;
Description.BlueBoldText = BlueBoldText;

export default Description;