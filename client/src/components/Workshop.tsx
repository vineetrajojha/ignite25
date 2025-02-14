import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules";


import Card from "./Card";
import ignitePhoto from "../assets/image1.jpg";
import roboRace from "../assets/robo-race.webp";
import roboWar from "../assets/robo-war.webp";

const Workshop = () => {
  const events = [
    { title: "Robotics Event", imgLink: ignitePhoto },
    { title: "Robo Race", imgLink: roboRace },
    { title: "Robo War", imgLink: roboWar },
    { title: "AI Hackathon", imgLink: ignitePhoto },
    { title: "Drone Challenge", imgLink: roboRace },
  ];

  return (
    <div className="px-4 py-28 text-center">
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
            640: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on large screens
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-scroll every 2s
          loop={true}
          touchRatio={1.5} // Enhances swipe responsiveness
          grabCursor={true} // Shows a grab cursor on hover
          className="pb-8"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <Card title={event.title} imgLink={event.imgLink} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Workshop;
