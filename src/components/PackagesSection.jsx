import PackageCard from "./PackageCard.jsx";

// Importing images
import sigiriyaImage from "/sigiriya.jpeg";
import sinharajayaImage from "/sinharaja.jpeg";
import ellaImage from "/ella.jpeg";

const PackagesSection = () => {
    const packages = [
        {
            title: 'SIGIRIYA',
            days: '10 days trip',
            image: 'path-to-sigiriya-image.jpg',
        },
        {
            title: 'SINHARAJAYA',
            days: '6 days trip',
            image: 'path-to-sinharajaya-image.jpg',
        },
        {
            title: 'ELLA',
            days: '6 days trip',
            image: 'path-to-ella-image.jpg',
        },
    ];

    return (
        <div
            className="flex py-[4.6875rem] px-0 flex-col justify-center items-center gap-[3.125rem] self-stretch bg-[#042630]">
            <div className="flex flex-col justify-center items-center gap-[2rem] w-[70%]">
                <h3 className="self-stretch text-white text-center font-odor-mean-chey text-[3rem] font-normal leading-normal">
                    Top Packages
                </h3>
                <p className="self-stretch text-white/70 text-center font-inter text-[1.2rem] font-normal leading-normal">
                    This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the
                    context which led to the publication of this special issue of Via Tourism Review.
                </p>
            </div>
            <div className="flex justify-center items-center gap-[2.5rem]">
                <PackageCard name={"Sigiriya"} image={sigiriyaImage} duration={"10"}/>
                <PackageCard name={"Sinharajaya"} image={sinharajayaImage} duration={"5"}/>
                <PackageCard name={"Ella"} image={ellaImage} duration={"6"}/>
            </div>
            <button
                className="rounded-[0.625rem] p-3 bg-[#D0D6D6] text-[#042630] font-work-sans text-[0.875rem] font-semibold leading-normal uppercase">
                Custom Package
            </button>
        </div>
    );
};

export default PackagesSection;
