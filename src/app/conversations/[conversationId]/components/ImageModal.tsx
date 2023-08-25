'use client';

import Modal from '@/app/components/Modal';
import { FunctionComponent } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    isOpen?: boolean;

    onClose: () => void;
    src?: string | null;
}

const ImageModal: FunctionComponent<ImageModalProps> = ({ onClose, isOpen, src }) => {
    if (!src) {
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-80 h-80">
                <Image alt="Image" fill className="object-cover" src={src} />
            </div>
        </Modal>
    );
};

export default ImageModal;
