import React, { ChangeEvent, ReactNode } from 'react';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string, field: string) => void;
    options: Option[];
    iconSrc: string
    dropdownState: boolean
    handleDropdownChange: (state: boolean) => void
}

const Dropdown: React.FC<DropdownProps> = ({ id, label, value, onChange, options, iconSrc, handleDropdownChange, dropdownState }) => {
    return (
        <div className="relative h-min">
            <label className="w-full mb-2 text-sm font-bold">
                {label}
                <span className="text-red-500">*</span>
            </label>
            <div className="relative cursor-pointer" onClick={() => handleDropdownChange(!dropdownState)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3.5 left-3.5">
                    <path d="M16 22V18.2002C16 18.0775 16.0693 17.9653 16.1791 17.9105V17.9105C18.5208 16.7396 20 14.3462 20 11.7281V10C20 6.13401 16.866 3 13 3L11.9231 3C8.65186 3 6 5.65186 6 8.9231V8.9231C6 8.97342 5.98632 9.0228 5.96043 9.06595L3.9855 12.3575C3.55179 13.0804 4.07248 14 4.91548 14V14C5.51444 14 6 14.4856 6 15.0845V16.5C6 17.3284 6.67157 18 7.5 18H8.5C9.32843 18 10 18.6716 10 19.5V22" stroke="#242E49" stroke-width="2" />
                    <path d="M13 7V13" stroke="#242E49" stroke-width="2" />
                    <path d="M16 10L10 10" stroke="#242E49" stroke-width="2" />
                </svg>
                <p
                    id="select"
                    className="bg-[#F2F5F9] border text-sm rounded-lg block h-14 w-full p-3.5 outline-none pl-12 placeholder:text-[#5D6A85]"
                >
                    {value}
                </p>
                <img src="chevron.png" height={24} width={24} className='absolute top-4 right-3.5'></img>
            </div>
            {dropdownState && (
                <ul className="bg-white border text-sm rounded-lg block w-full outline-none placeholder-text-[#5D6A85] border-b cursor-pointer">
                    {options.map((option, index) => (
                        <li key={index} className="border-b p-2" onClick={() => {
                            onChange(option.value, 'gender');
                            handleDropdownChange(!dropdownState)
                        }}>
                            {option.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
};

export default Dropdown;
