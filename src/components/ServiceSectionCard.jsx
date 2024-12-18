const serviceSectionCard = ({Icon:Icon, title, desctiption}) => {
    return (
        <div
            className="flex p-[1rem] justify-center items-center gap-[1.25rem] rounded-[0.625rem] border border-[#042630] bg-[#042630]">
            <Icon className="text-[#f3f3f5] text-[3rem]"/>
            <div>
                <h6
                    className="flex w-[17.58rem] h-[1.5rem] flex-col justify-center flex-shrink-0 text-[#F3F3F5] font-dm-sans text-[1.5rem] font-medium leading-[1.5rem]">
                    {title}
                </h6>
                <p className="flex w-[17.58rem] h-[4.1875rem] flex-col justify-center flex-shrink-0 text-[#F3F3F5] font-dm-sans text-[1rem] font-normal leading-[1rem]">
                    {desctiption}
                </p>
            </div>
        </div>
    );
}

export default serviceSectionCard;