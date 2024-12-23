import ActivityCard from "./ActivityCard.jsx";
import TopSection from "./TopSection.jsx";

const activities = [
    {id: 1, title: "Camping", icon: "🏕", description: "Explore beautiful landscapes and camp under the stars."},
    {id: 2, title: "Adventure", icon: "🧗", description: "Take on thrilling adventures and conquer your fears."},
    {id: 3, title: "Trekking", icon: "🥾", description: "Enjoy breathtaking treks across mountains and hills."},
    {id: 4, title: "Off Road", icon: "🚙", description: "Discover remote areas and go off the beaten path."},
    {id: 5, title: "Camp Fire", icon: "🔥", description: "Relax and bond around a warm and cozy campfire."},
    {id: 6, title: "Exploring", icon: "🗺️", description: "Explore new places and gain unforgettable experiences."},
];

const ActivitiesSection = () => {
    return (

        <div
            className="flex py-[6.25rem] px-0 flex-col justify-center items-center gap-[3.75rem] bg-gradient-to-b from-[#042630] via-[#4C7273] to-[#86B9B0]">
            <TopSection title={"Top Activities"}
                        description={"This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the context which led to the publication of this special issue of Via Tourism Review."}/>
            <div className="flex w-[70%] justify-center items-center content-center gap-[3rem] flex-wrap">
                {activities.map((activity) => (
                    <ActivityCard key={activity.id} title={activity.title} description={activity.description}
                                  icon={activity.icon}/>
                ))}

            </div>
        </div>
    );
};

export default ActivitiesSection;
