import CenteralizedVerticalContainer from "@_components/common/containers/CenteralizedVerticalContainer";
import LoginFooter from "@_components/login/LoginFooter";
import LoginForm from "@_components/login/LoginForm";
import LoginHeader from "@_components/login/LoginHeader";
import { LoginImageSection } from "@_components/login/LoginImageSection";
import React, { useRef } from "react";


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
        className="flex flex-1 flex-row w-4/5 my-6"
        onClick={handleMainClick}
      >
        <LoginImageSection />
        <LoginForm />
      </main>
      <LoginFooter />
    </CenteralizedVerticalContainer>
  );
}
