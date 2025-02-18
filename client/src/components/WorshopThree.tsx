import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules";

import Card from "./Card";
import Event15 from "../assets/poster/The Science Sprint.png";
import Event16 from "../assets/poster/Urban Green Solutions Challenge.png";
import Event17 from "../assets/poster/Utility Robot Expo.png";
import Event18 from "../assets/poster/Waste to wealth challenge .png";
import Event19 from "../assets/poster/X or Byte ki Kahani.png";

const WorkshopThree = () => {
  const events = [
    { title: "The Science Sprint", imgLink: Event15 },
    { title: "Urban Green Solutions Challenge", imgLink: Event16 },
    { title: "Utility Robot Expo", imgLink: Event17 },
    { title: "Waste to Wealth Challenge", imgLink: Event18 },
    { title: "X OR Byte Ki Kahani", imgLink: Event19 },
  ];

  const registrationLink = "https://forms.gle/bbFkMbajhYQTvH7q9";

  return (
    <div className="px-4 py-2 text-center">
      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-scroll every 2s
          loop={true}
          touchRatio={1.5} // Enhances swipe responsiveness
          grabCursor={true} // Shows a grab cursor on hover
          className="pb-8"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="block">
                <Card title={event.title} imgLink={event.imgLink} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WorkshopThree;
