import Modal from '@_components/common/Modal';
import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';

interface UseModalOptions {
    renderFooter?: () => ReactNode;
    children: ReactNode;
}

export function useModal({ children, renderFooter }: UseModalOptions) {
    const [open, setOpen] = useState(false);

    const openModal = useCallback(() => setOpen(true), []);
    const closeModal = useCallback(() => setOpen(false), []);

    const ModalWrapper = () => (
        <Modal open={open} onClose={closeModal} renderFooter={renderFooter}>
            {children}
        </Modal>
    );

    return {
        openModal,
        closeModal,
        Modal: ModalWrapper,
    };
} 