import React, { useRef } from "react";
import arrowLeft from "/arrowLeft.svg";
import arrowRight from "/arrowRight.svg";

// Simulated data from backend
const servicesData = [
  {
    id: 1,
    image: "/image 6.png",
    title: "Skin Retouch",
    description: "Get your skin done in top notch styles...",
  },
  {
    id: 2,
    image: "/image 10.png",
    title: "Make-Over",
    description: "Experience Make-overs in a whole new level",
  },
  {
    id: 3,
    image: "/image 9.png",
    title: "Hair Treatment",
    description: "Give your hair a whole new dazzling feel",
  },
  {
    id: 4,
    image: "/image 7.png",
    title: "Spa",
    description: "Give your skin a whole new dazzling feel",
  },
];

const Services = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="px-4 md:px-20">
      <div className="w-4/5 md:w-1/3 mx-auto flex justify-between items-center py-4">
        <h3 className="text-lightPrimaryColor text-sm">Trusted By:</h3>
        <ul className="flex gap-4">
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            Wave
          </button>
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            HOE
          </button>
        </ul>
      </div>
      <div className="mt-10 relative">
        <h3 className="text-primaryColor text-4xl font-bold py-4">
          Popular Services
        </h3>
        <div className="w-full overflow-hidden" ref={containerRef}>
          <div
            className="w-[150%] md:w-full grid grid-cols-4 md:flex gap-6 justify-between"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {servicesData.map((service) => (
              <div key={service.id}>
                <img src={service.image} alt="" className="w-full" />
                <h4 className="text-primaryColor text-xl font-bold py-2">
                  {service.title}
                </h4>
                <p className="text-primaryColor text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollLeft}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full pl-3 pr-4 py-2 border border-[#FF7701]"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full pr-3 pl-4 py-2 border border-[#FF7701]"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Services;
