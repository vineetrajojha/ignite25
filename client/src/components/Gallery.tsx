
import galleryImg1 from "../assets/logo.png";
import galleryImg2 from "../assets/logo.png";
import galleryImg3 from "../assets/logo.png";
import galleryImg4 from "../assets/logo.png";
import galleryImg5 from "../assets/logo.png";
import galleryImg6 from "../assets/logo.png";

const Gallery = () => {
  return (
    <div className="py-20 max-w-6xl text-center mx-auto">
      {/* Section Title */}
      <h1 className="text-5xl font-extrabold text-white tracking-tight mb-8">
        Event Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Gallery Images */}
        {[ galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105">
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-72 object-cover rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="text-base text-white font-medium text-center mt-10 max-w-3xl mx-auto">
        <p>
          Experience the highlights of Ignite – from intense hackathons to inspiring keynotes, networking, and fun. Relive the best moments through our gallery!
        </p>
      </div>
    </div>
  );
};

export default Gallery;
