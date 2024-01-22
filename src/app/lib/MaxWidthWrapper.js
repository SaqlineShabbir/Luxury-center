
const MaxWidthWrapper = ({
    className,
    children
}) => {

    return (
        <div className=" w-full mx-auto max-w-screen-xl px-2">
            {children}
        </div>
    )
}

export default MaxWidthWrapper;