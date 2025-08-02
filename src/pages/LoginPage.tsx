import CenteralizedVerticalContainer from "@_components/common/containers/CenteralizedVerticalContainer";
import LoginFooter from "@_components/login/LoginFooter";
import LoginForm from "@_components/login/LoginForm";
import LoginHeader from "@_components/login/LoginHeader";
import { LoginImageSection } from "@_components/login/LoginImageSection";
import React, { useRef } from "react";

import { useModal } from "../hooks/useModal";

export default function LoginPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  const { openModal, closeModal, Modal } = useModal({
    children: (
      <div className="text-lg">모달 내용 예시입니다.<br />여기에 원하는 내용을 넣으세요.</div>
    ),
    renderFooter: () => (
      <>
        <button
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          onClick={closeModal}
        >
          확인
        </button>
      </>
    ),
  });

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
        {/* 모달 예시 버튼 */}
        <button
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={openModal}
        >
          모달 열기
        </button>
        <Modal />
      </main>
      <LoginFooter />
    </CenteralizedVerticalContainer>
  );
}
