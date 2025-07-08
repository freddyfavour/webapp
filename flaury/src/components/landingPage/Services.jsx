import React, { useRef } from "react";
import arrowLeft from "/arrowLeft.svg";
import arrowRight from "/arrowRight.svg";

const servicesData = [
  {
    id: 1,
    image: "/service1.png",
    title: "Skin Retouch",
    description: "Get your skin done in top notch styles...",
  },
  {
    id: 2,
    image: "service2.png",
    title: "Make-Over",
    description: "Experience Make-overs in a whole new level",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "Hair Treatment",
    description: "Give your hair a whole new dazzling feel",
  },
  {
    id: 4,
    image: "/service4.png",
    title: "Spa",
    description: "Melt away stress, reveal the readiance in you.",
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-full mx-auto ">
      <div className="mt-10 relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Popular Services</h3>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map((service) => (
            <div key={service.id} className="w-full">
              <img
                src={service.image}
                alt=""
                className="bg-secondary w-full"
              />
              <h4 className="text-primary text-xl font-bold py-2">
                {service.title}
              </h4>
              <p className="text-primary text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
