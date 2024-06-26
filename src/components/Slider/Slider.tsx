import { Dispatch } from "react"

interface RangeProps {
    value: number,
    setValue: (value: string, field: string) => void
    id: string
    min?: string,
    max?: string
}

const RangeSlider = ({ value, setValue, id, min = "60", max = "120" }: RangeProps) => {
    return <>
        <div className="w-full">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value, id)
                }}
                className="bg-gray-300 w-full rounded-full outline-none appearance-none bg-transparent"
            />
            <div className="flex justify-between mt-2 text-sm text-[#5D6A85]">
                <span className="w-8 text-left">{"<=" + min}</span>
                <span className="w-8 text-center">{value}</span>
                <span className="w-8 text-center">{">" + (Number(max) + 1)}</span>
            </div>
        </div>
    </>
}

export default RangeSlider