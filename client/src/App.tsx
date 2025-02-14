import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Particle } from "./components/Particle";
import Workshop from "./components/Workshop";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="bg-black bg-opacity-50 overflow-x-hidden ">
      <Particle />
      <div className="popins bg-gradient-to-br ">
        <div className="absolute "></div>
        <Navbar />
        <HeroSection />
        <About />
        <Workshop />
        
        <Gallery/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
