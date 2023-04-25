import React, { useEffect, PropsWithChildren  } from 'react';
import { ModalStyles, Overlay } from './Modal.styled';

interface IProps {
    onClose: () => void,
}

export const Modal = (props: PropsWithChildren<IProps>) => {
    const { onClose, children } = props;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.code === 'Escape') {
                onClose();
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        };
    }, [onClose]);

    const handleOverlayClck = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <Overlay onClick={handleOverlayClck}>
            <ModalStyles>
                {children}
            </ModalStyles>
        </Overlay>
    );
}