import galleryImg1 from "../assets/gallery1.jpg";
import galleryImg2 from "../assets/gallery2.jpg";
import galleryImg3 from "../assets/gallery3.jpg";
import galleryImg4 from "../assets/gallery4.jpg";
import galleryImg5 from "../assets/gallery5.jpg";
import galleryImg6 from "../assets/gallery6.jpg";

const Gallery = () => {
  const images = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-5xl font-extrabold text-white tracking-tight mb-12">
        Event Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* First Large Image */}
        <div className="md:col-span-2 row-span-2 relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={images[0]}
            alt="Gallery Image 1"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* Other Images */}
        {images.slice(1, 7).map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              src={image}
              alt={`Gallery ${index + 2}`}
              className="w-full h-60 sm:h-72 object-cover rounded-3xl"
            />
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
