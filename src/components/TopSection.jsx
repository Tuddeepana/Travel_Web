const TopSection = ({title, description}) => {
    return (
        <div className="flex cursor-default flex-col justify-center items-center gap-[2rem] w-[70%]">
            <h3 className="self-stretch text-white text-center font-odor-mean-chey text-[4rem] font-normal leading-normal">
                {title}
            </h3>
            <p className="self-stretch text-white/70 text-center font-inter text-[1.2rem] font-normal leading-normal">
                {description}
            </p>
        </div>
    )
}

export default TopSection;