import { useEffect, useState } from "react";
import { FaUsers, FaUniversity, FaClipboardList, FaTrophy } from "react-icons/fa"; // Import icons

// Custom Hook for Count Animation
const useCountUp = (end: number, duration: number): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};


const About = () => {
  const stats = [
    { label: "Participants", value: 5000, icon: <FaUsers /> },
    { label: "Universities", value: 120, icon: <FaUniversity /> },
    { label: "Registrations", value: 8000, icon: <FaClipboardList /> },
    { label: "Total Prizes ($)", value: 50000, icon: <FaTrophy /> },
  ];

  return (
    <div className="py-16 px-6 sm:px-10 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-10">
        About Ignite
      </h1>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        {/* Left Container - Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full md:w-1/2">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000);
            return (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white/10 rounded-2xl shadow-lg flex flex-col items-center transition-transform duration-500 hover:scale-105"
              >
                <span className="text-3xl sm:text-5xl text-yellow-400">{stat.icon}</span> {/* Icon */}
                <h2 className="text-2xl sm:text-4xl font-bold text-yellow-400 mt-2">
                  {count}+
                </h2>
                <p className="text-sm sm:text-lg font-medium text-white">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Right Container - About Text */}
        <div className="w-full md:w-1/2 bg-white/10 p-6 sm:p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why Ignite?</h2>
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            Ignite 2025 is a thrilling tech fest that promises to ignite your
            passion for technology and innovation! This action-packed event
            features a range of exciting competitions, including a coding
            competition that will put your programming skills to the test, a
            tech quiz that will challenge your knowledge of the latest trends
            and technologies, and a model presentation that will showcase your
            creativity and innovation. Whether you're a tech enthusiast, a
            budding programmer, or simply someone who loves to learn and
            explore, Ignite 2025 has something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
