import { Dispatch } from "react"

interface RangeProps {
    value: number,
    setValue: (value: string, field: string) => void
    id: string
}

const RangeSlider = ({ value, setValue, id }: RangeProps) => {
    return <>
        <div className="w-full">
            <input
                type="range"
                min="60"
                max="120"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value, id)
                }}
                className="bg-gray-300 w-full rounded-full outline-none appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-red-500/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:bg-blue-500"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-600">
                <span className="w-8 text-left">60</span>
                <span className="w-8 text-center">80</span>
                <span className="w-8 text-center">100</span>
                <span className="w-8 text-center">120</span>
            </div>
        </div>
    </>
}

export default RangeSlider