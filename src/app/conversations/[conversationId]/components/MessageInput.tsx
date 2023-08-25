'use client';

import { FunctionComponent } from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface MessageInputProps {
    placeholder: string;
    id: string;
    type?: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    errors: FieldErrors;
}

const MessageInput: FunctionComponent<MessageInputProps> = ({
    errors,
    id,
    placeholder,
    register,
    required,
    type,
}) => {
    return (
        <div className="relative w-full ">
            <input
                placeholder={placeholder}
                autoComplete={id}
                {...register(id, { required })}
                id={id}
                type={type}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
    );
};

export default MessageInput;
