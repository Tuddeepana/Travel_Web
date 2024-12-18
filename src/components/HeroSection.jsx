import Background from '/Background.png';

const HeroSection = () => {
    return (<div className="w-full h-screen bg-cover bg-[#ffffff] flex items-center"
                 style={{backgroundImage: `url(${Background})`}}>
            <div className="flex flex-col items-start gap-[4.625rem] pt-20 pl-[5rem]">
                <div className="flex flex-col items-start gap-[1.5rem] self-stretch">
                    <div className="flex flex-col gap-3">
                        <h1 className="self-stretch text-white font-poppins text-[7rem] font-extrabold leading-[7rem]">
                            EXPLORE<br/>Sri Lanka
                        </h1>
                        <p className="text-white font-poppins text-[1rem] font-medium leading-[1.5625rem] capitalize">
                            Discover and Book Unique Experiences in Sri Lanka Hosted by Local Experts.
                        </p>
                    </div>
                    <button
                        className="border-2 p-3 border-white flex flex-col justify-center flex-shrink-0 text-white text-center font-lato text-[1rem] font-semibold capitalize hover:bg-white hover:text-[#555] duration-300">
                        Our Services
                    </button>
                </div>
            </div>

        </div>);
};

export default HeroSection;
