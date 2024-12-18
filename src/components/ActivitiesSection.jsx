import ActivityCard from "./ActivityCard.jsx";

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
            <div className="flex flex-col justify-center items-center gap-[2rem] w-[70%]">
                <h3 className="self-stretch text-white text-center font-odor-mean-chey text-[4rem] font-normal leading-normal">
                    Top Activities
                </h3>
                <p className="self-stretch text-white/70 text-center font-inter text-[1.2rem] font-normal leading-normal">
                    This text presents my research journey on the topic of Music and Tourism Imaginaries and gives the
                    context which led to the publication of this special issue of Via Tourism Review.
                </p>
            </div>
            <div className="flex w-[70%] justify-center items-center content-center gap-[3.125rem] flex-wrap">
                {activities.map((activity) => (
                    <ActivityCard key={activity.id} title={activity.title} description={activity.description} icon={activity.icon} />
                ))}

            </div>
        </div>



        // <div className="flex py-[4.6875rem] px-0 flex-col justify-center items-center gap-[3.125rem] self-stretch bg-[#042630]">
        //   {/* Top Activities Section */}
        //   <section className="activities-section">
        //     <div className="container">
        //       <h2 className="section-title">Top Activities</h2>
        //       <p className="section-description">
        //         This text presents my research journey on the topic of Music and Tourism imaginations and gives
        //         the context which led to the publication of this special issue of We Tourism Review.
        //       </p>
        //       <div className="activity-cards">
        //         {activities.map((activity) => (
        //           <div key={activity.id} className="card">
        //             <div className="icon">{activity.icon}</div>
        //             <h3 className="card-title">{activity.title}</h3>
        //             <p className="card-description">{activity.description}</p>
        //           </div>
        //         ))}
        //       </div>
        //     </div>
        //   </section>
        // </div>
    );
};

export default ActivitiesSection;
