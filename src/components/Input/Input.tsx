import React from 'react';
import GenderIcon from '../../../public/gender.svg'
import { classNames } from 'utils';

interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    value: string;
    onChange: (value: string, field: string) => void;
    placeholder: string;
    required: boolean;
    iconSrc: string
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label, value, onChange, placeholder, required, iconSrc }) => {
    return (
        <>
            <div className="relative">
                <label className="w-full mb-2 mt-2 text-sm font-medium">
                    {label}
                    <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <img src={iconSrc} className='absolute top-[1.1rem] left-3.5' />
                    <input
                        id={id}
                        type={type}
                        className={classNames("bg-[#F2F5F9] border text-sm rounded-lg h-14 w-full p-3.5 outline-none pl-12 placeholder:text-[#5D6A85]", !value ? 'border border-red-500' : "")}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value, id)}
                        required={required}
                    />
                </div>
                {!value && (
                    <p className="mt-2 text-sm text-[#DA1E2E] dark:text-[#DA1E2E]">
                        <span>This field is required</span>
                    </p>
                )}
            </div>
        </>


    );
};

export default InputField;
