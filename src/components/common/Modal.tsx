import CloseBlackButton from '@_assets/icon/ic_close_black.svg?react';
import React from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    renderFooter?: () => React.ReactNode;
}

const Modal = ({
    open,
    onClose,
    children,
    renderFooter,
}: ModalProps) => {
    if (!open) return null;

    // 모달 외부 클릭 시 닫기
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            onClick={handleOverlayClick}
        >
            <div
                className="relative bg-white rounded-lg shadow-lg w-3/5 h-1/2 flex flex-col justify-between"
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <CloseBlackButton />
                </button>
                {/* Content */}
                {/* 동작 */}
                <div className="flex-1 flex items-center justify-center p-8">
                    {children}
                </div>
                {/* Footer */}
                {/* 등록하기나, 등록하기 + 취소하기 조합을 넣어주시면 됩니다. */}
                {renderFooter && (
                    <div className="flex justify-end gap-4 p-4 border-t">
                        {renderFooter()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal; 