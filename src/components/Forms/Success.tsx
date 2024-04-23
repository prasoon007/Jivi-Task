import Header from "components/Header/Header";
import { Dispatch } from "react";

interface FormPayload {
    setFormStep: Dispatch<React.SetStateAction<any>>
    setFormData: () => void
}

const SubmitSuccess = (props: FormPayload) => {
    const { setFormStep, setFormData } = props;

    return (
        <>
            <header>
                <Header title="Success" />
            </header>
            <div className="h-full flex flex-col justify-center items-center">
                <div className="w-full max-w-md px-6 mt-64">
                    <p className="text-lg font-semibold">Thank you.</p>
                    <p className="text-base">Your details are saved successfully.</p>
                </div>
            </div>
            <footer className="fixed bottom-0 w-full text-center my-5">
                <div className="flex justify-center">
                    <button onClick={() => { setFormStep(1); setFormData() }} className="w-[90%] cursor-pointer hover:bg-[#0240ab] border h-[70px] disabled:bg-[#DCE1E8] bg-[#0F67FE] text-white rounded-lg">Submit Again</button>
                </div>
            </footer>
        </>
    );
};

export default SubmitSuccess;
