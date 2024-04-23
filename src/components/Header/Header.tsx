

/* eslint-disable prettier/prettier */
type HeaderType = {
    title?: string
}

const Header = (props: HeaderType) => {
    const { title = 'Jivi Task' } = props

    return (
        <div className="text-left bg-white mt-[30px] font-semibold border-b-2 border-[#DCE1E8]">
            <p className="text-lg ml-[24px] mb-2">
                {title}
            </p>
        </div>
    )

}

export default Header
