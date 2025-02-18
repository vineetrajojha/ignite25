import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Autoplay } from "swiper/modules";

import Card from "./Card";
import Event8 from "../assets/poster/Poster presentation .png";
import Event9 from "../assets/poster/Reinvent Food waste.png";
import Event10 from "../assets/poster/Robo Race.png";
import Event11 from "../assets/poster/Robo War.png";
import Event12 from "../assets/poster/Tech gaming competition .png";
import Event13 from "../assets/poster/Technical debate.png";
import Event14 from "../assets/poster/Technical quiz competition.png";

const WorkshopTwo = () => {
  const events = [
    { title: "Poster Presentation", imgLink: Event8 },
    { title: "Reinvent Food Waste", imgLink: Event9 },
    { title: "Robo Race", imgLink: Event10 },
    { title: "Robo War", imgLink: Event11 },
    { title: "Tech Gaming Competition", imgLink: Event12 },
    { title: "Tech Debate", imgLink: Event13 },
    { title: "Tech Quiz Competition", imgLink: Event14 },
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

export default WorkshopTwo;
