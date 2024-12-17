const Navbar = () => {
    return (
        <div className="absolute top-0 flex w-full px-[6rem] justify-between items-center pt-8 cursor-default">
            <h2 className="text-black font-montserrat text-2xl font-semibold leading-normal tracking-[0.9375rem]">
                Logo
            </h2>
            <div className="flex justify-between items-center flex-shrink-0 gap-10">
                <a className="text-black font-montserrat text-lg font-semibold leading-normal" href="">
                    Activities
                </a>
                <a className="text-black font-montserrat text-lg font-semibold leading-normal" href="">
                    Services
                </a>
                <button className="flex p-[0.625rem_1.25rem] items-start gap-[0.625rem] rounded-[2.8125rem] bg-black text-white font-montserrat text-lg font-semibold leading-normal">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Navbar;
