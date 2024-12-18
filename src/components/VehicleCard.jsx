export const LargeVehicleCard = ({icon, title, image}) => {
    return (
        <div
            className={`w-[35rem] h-[18rem] bg-no-repeat bg-cover rounded-[1rem] relative transition-transform duration-300 hover:scale-105 cursor-default`} style={{backgroundImage: `url(${image})`}}>
            <div
                className="absolute bottom-0 left-0 m-2 flex p-[0.3125rem] px-[1.85156rem] pl-[1.875rem] justify-center items-center gap-[0.625rem] flex-shrink-0 rounded-[2.75rem] bg-[#FFF]">
                <img src={icon} alt="icon"/>
                <p className="flex flex-col justify-center flex-shrink-0 text-[#050B20] font-dm-sans text-[0.9375rem] font-medium leading-[1.125rem]">
                    {title}
                </p>
            </div>
        </div>
    );
}

export const SmallVehicleCard = ({icon, title, image}) => {
    return (
        <div
            className={`relative w-[22.56rem] h-[18rem] bg-no-repeat bg-cover rounded-[1rem] transition-transform duration-300 hover:scale-105 cursor-default`} style={{backgroundImage: `url(${image})`}}>
            <div
                className="absolute bottom-0 left-0 m-2 flex p-[0.3125rem] px-[1.85156rem] pl-[1.875rem] justify-center items-center gap-[0.625rem] flex-shrink-0 rounded-[2.75rem] bg-[#FFF]">
                <img src={icon} alt="icon"/>
                <p className="flex flex-col justify-center flex-shrink-0 text-[#050B20] font-dm-sans text-[0.9375rem] font-medium leading-[1.125rem]">
                    {title}
                </p>
            </div>
        </div>
    );
}