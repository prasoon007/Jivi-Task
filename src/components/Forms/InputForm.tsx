import Dropdown from "components/DropDown/DropDown"
import Header from "components/Header/Header";
import InputField from "components/Input/Input"
import RangeSlider from "components/Slider/Slider";
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
                <div className='flex gap-6 w-full px-6 flex-col mt-4'>
                    <div>
                        <p className='font-bold text-sm'>Heart Rate</p>
                        <RangeSlider value={formData.hr} setValue={handleInputFieldChange} id='hr' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='font-bold text-sm'>Blood Pressure</p>
                        <RangeSlider value={formData.systollicBp} setValue={handleInputFieldChange} id='systollicBp' />
                        <RangeSlider value={formData.diastollicBp} setValue={handleInputFieldChange} id='diastollicBp' />
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