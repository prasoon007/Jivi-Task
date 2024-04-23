import Header from "components/Header/Header";
import { Dispatch } from "react";

interface FormPayload {
    setFormStep: Dispatch<React.SetStateAction<any>>
    setFormData: () => void
}


const SubmitSuccess = (props: FormPayload) => {
    const { setFormStep, setFormData } = props

    return <>
        <header>
            <Header title="Success" />
        </header>
        <body>
            <div className='h-screen flex items-center justify-center'>
                <div className='flex flex-col items-center gap-4 px-8'>
                    <p className='text-xl font-bold'>Thank you.</p>
                    <p className='text-lg'>Your details are saved successfully.</p>
                </div>
            </div>

        </body>
        <footer className="fixed bottom-0 w-full  text-center my-5">
            <button onClick={() => { setFormStep(1); setFormData() }} className="w-[90%] cursor-pointer hover:bg-[#0240ab] border h-[70px] disabled:bg-[#DCE1E8] bg-[#0F67FE] text-white rounded-lg">Submit Again</button>
        </footer>

    </>

}

export default SubmitSuccess