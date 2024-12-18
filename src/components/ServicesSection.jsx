import ServiceSectionCard from "./ServiceSectionCard.jsx";
import { FaHandsHelping } from "react-icons/fa";

const services = [
    {id: 1, title: "Service One", description: "High-quality services for your adventure needs."},
    {id: 2, title: "Service Two", description: "Professional guides to ensure your safety and enjoyment."},
    {id: 3, title: "Service Three", description: "Affordable packages tailored to your preferences."},
];

const ServicesSection = () => {
    return (
        <div className="flex p-[6.25rem] px-[4.6875rem] justify-center items-center gap-[7.5rem] bg-white">
            <div className="flex w-[40%] flex-col justify-center items-start gap-[1.5625rem] flex-shrink-0">
                <h3 className="self-stretch text-black font-odor-mean-chey text-[4rem] font-normal leading-normal">
                    Why Choose Us?
                </h3>
                <p
                    className="self-stretch text-[rgba(0,0,0,0.87)] font-inter text-[1.2rem] font-normal leading-normal">
                    This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the
                    context which led to the publication of this special issue of Via Tourism Review.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[1.875rem]">
                {services.map((service) => (
                    <ServiceSectionCard key={service.id} title={service.title} desctiption={service.description} Icon={FaHandsHelping} />
                ))}
            </div>
        </div>
    )
}

export default ServicesSection;