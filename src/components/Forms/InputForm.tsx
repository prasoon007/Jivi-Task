import Dropdown from "components/DropDown/DropDown"
import Header from "components/Header/Header";
import InputField from "components/Input/Input"
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { classNames } from "utils";

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
];

interface FormPayload {
    formData: Record<string, any>
    setFormData: Dispatch<React.SetStateAction<any>>
    setFormStep: Dispatch<React.SetStateAction<any>>
}


const InputForm = (props: FormPayload) => {
    const { formData, setFormData, setFormStep } = props


    const [openDropdown, setOpenDropdown] = useState(false);
    const [sliderValue, setSliderValue] = useState(80);


    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.target.value, 10));
    };

    const handleDropdownChange = (dropdownState: boolean) => {
        setOpenDropdown(dropdownState)
    };

    const handleInputFieldChange = (value: string, field: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return <>
        <header>
            <Header title="Details" />
        </header>
        <body>
            <div className='h-full w-full '>
                <div className='flex gap-4 w-full px-6 flex-col mt-2'>
                    <p className=''>Heart Rate</p>
                    <div className="w-full">
                        <input
                            type="range"
                            min="60"
                            max="120"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="bg-gray-300 w-full rounded-full outline-none appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-red-500/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:bg-blue-500"
                        />
                        <div className="flex justify-between mt-2 text-xs text-gray-600">
                            <span className="w-8 text-left">60</span>
                            <span className="w-8 text-center">80</span>
                            <span className="w-8 text-center">100</span>
                            <span className="w-8 text-center">120</span>
                        </div>
                    </div>
                    <InputField
                        id="name"
                        label="Name"
                        type="text"
                        value={formData?.name}
                        onChange={handleInputFieldChange}
                        placeholder="Please enter your name"
                        iconSrc='user-name.png'
                        required
                    />
                    <InputField
                        id="dob"
                        label="Date of Birth"
                        type="date"
                        value={formData?.dob}
                        iconSrc='calendar.png'
                        onChange={handleInputFieldChange}
                        placeholder="Select Date"
                        required
                    />
                    <Dropdown
                        id="gender"
                        label="Gender"
                        value={formData?.gender}
                        iconSrc='gender.svg'
                        onChange={handleInputFieldChange}
                        handleDropdownChange={handleDropdownChange}
                        dropdownState={openDropdown}
                        options={options}
                    />
                </div>
            </div>
        </body>
        <footer className="fixed bottom-0 w-full  text-center my-5">
            <button disabled={!formData?.name || !formData?.dob} onClick={() => setFormStep(2)} className={classNames("w-[90%] cursor-pointer hover:bg-[#0240ab] border h-[70px] disabled:bg-[#DCE1E8] bg-[#0F67FE] text-white rounded-lg", !formData.name || !formData.dob ? "disabled:bg-[#DCE1E8] disabled:cursor-not-allowed" : "")}>Next</button>
        </footer>
    </>

}

export default InputForm