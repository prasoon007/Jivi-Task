import Dropdown from "components/DropDown/DropDown"
import Header from "components/Header/Header";
import InputField from "components/Input/Input"
import { ChangeEvent, Dispatch, useEffect, useState } from "react";

const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
];

interface FormPayload {
    formData: Record<string, any>
    setFormStep: Dispatch<React.SetStateAction<any>>
}


const ConfirmForm = (props: FormPayload) => {
    const { setFormStep, formData } = props

    return <>
        <header>
            <Header title="Confirm" />
        </header>
        <body>
            <div className='h-screen w-full '>
                <div className='flex gap-4 w-full px-8 flex-col mt-8'>
                    <p className='text-lg'>Please confirm your details to continue.</p>
                    <div className="flex items-center mt-4">
                        <p className="mr-2 font-bold">Heart Rate: </p>
                        <p className="">{formData.hr}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Blood Pressure: </p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Systolic: </p>
                        <p className="">{formData.systollicBp}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Diastolic: </p>
                        <p className="">{formData.diastollicBp}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Name: </p>
                        <p className="">{formData.name}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Date of Birth: </p>
                        <p className="">{formData.dob}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <p className="mr-2 font-bold">Gender: </p>
                        <p className="">{formData.gender}</p>
                    </div>
                </div>
            </div>
        </body>
        <footer className="fixed bottom-0 w-full text-center my-5">
            <div className="flex justify-center gap-4">
                <button onClick={() => setFormStep(1)} className="w-[45%] border h-[70px] bg-[#DCE1E8]  text-white rounded-lg">Edit</button>
                <button onClick={() => setFormStep(3)} className="w-[45%] border h-[70px] disabled:bg-[#DCE1E8] bg-[#0F67FE] text-white rounded-lg">Submit</button>
            </div>
        </footer>

    </>

}

export default ConfirmForm