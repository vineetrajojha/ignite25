import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules";

import Card from "./Card";
import Event1 from "../assets/poster/Bio Innovation Pitch.png";
import Event2 from "../assets/poster/Biodatathon.png";
import Event3 from "../assets/poster/Bioinformatics Quest.png";
import Event4 from "../assets/poster/Drone Design Expo.png";
import Event5 from "../assets/poster/Drone Race.png";
import Event6 from "../assets/poster/Eco chem hackthon.png";
import Event7 from "../assets/poster/IOT and AI Challenge.png";

const Workshop = () => {
  const events = [
    { title: "Bio Innovation Pitch", imgLink: Event1 },
    { title: "Biodatathon", imgLink: Event2 },
    { title: "Bioinformatics Quest", imgLink: Event3 },
    { title: "Drone Design Expo", imgLink: Event4 },
    { title: "Drone Race", imgLink: Event5 },
    { title: "Eco Chem Hackathon", imgLink: Event6 },
    { title: "IOT & AI Idea Challenge", imgLink: Event7 },
  ];

  return (
    <div className="px-4 py-2 text-center">
      <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
        Our Events
      </h1>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto mt-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          touchRatio={1.5}
          grabCursor={true}
          className="pb-8"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
               
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#0F3019] to-transparent opacity-80 blur-xl animate-spin-slow"></div>
                
                {/* Card */}
                <div className="relative z-10">
                  <Card title={event.title} imgLink={event.imgLink} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Workshop;
