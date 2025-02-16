import logo from "../assets/logo.png";
import logo1 from "../assets/iilm-d.png";
import { FaMapMarkerAlt } from "react-icons/fa";


const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        
        {/* Logo Image */}
        <img 
  src={logo1} 
  alt="Ignite Logo" 
  className="mx-auto mt-20 w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[450px] mb-1" 
/>
<img 
  src={logo} 
  alt="Ignite Logo" 
  className="mx-auto mt-1 w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[450px] animate-pulse drop-shadow-lg" 
/>
{/* <p className="-mt-4 max-w-md mx-auto text-base sm:text-lg md:-mt-3 md:text-[26px] text-gray-300">
  <span className="pb-1 inline-block">Igniting Minds,</span> 
  Illuminating Futures
</p> */}







    
{/* <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-2 md:text-[42px] text-gray-300">
  <span className="pb-2 inline-block">Igniting Minds,</span> <br />
  Illuminating Futures
</p> */}

<p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-2 md:text-[30px] text-gray-300">
  <span className="pb-2 inline-block">3rd March &</span> 4th March 2025
 
</p>



        
        
        <div className="mt-5 sm:mt-12">
          <button
            type="button"
            className="bg-white text-black border border-gray-300 mt-0 px-5 py-2 text-base font-medium rounded-full min-w-[100px] shadow-md hover:bg-gray-200 transition-all duration-300"

          >
            Register Now
          </button>
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-white text-sm flex justify-center items-center gap-2">
  <FaMapMarkerAlt className="text-red-500 text-lg" /> 
  <span>IILM University, Greater Noida</span>
</div>
    </div>
  );
};

export default HeroSection;
