const ActivityCard = ({icon, title, description}) => {
    return (
        <div
            className="flex w-[18rem] cursor-default p-[3.125rem] px-[1.25rem] flex-col justify-center items-center gap-[3rem] flex-shrink-0 rounded-[0.9375rem] bg-white shadow-[1px_1px_2px_0px_rgba(40,141,157,0.39)]">
            <div className="flex flex-col items-center gap-[0.6875rem]">
                <div className="text-[5rem]">
                    {icon}
                </div>
                <h6 className="text-[#525252] font-work-sans text-[2rem] font-bold leading-normal">
                    {title}
                </h6>
                <p className="text-[#525252] text-center font-work-sans text-[1rem] font-normal leading-[1.375rem]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ActivityCard;