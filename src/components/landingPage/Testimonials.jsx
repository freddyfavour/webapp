import React, { useRef } from "react";
import arrowLeft from "/arrowLeft-brown.svg";
import arrowRight from "/arrowRight-brown.svg";

// Simulated data from backend
const testimonialsData = [
  {
    id: 1,
    image: "/customer1.png",
    text: "Scheduling my appointments has never been easier. The app is user-friendly, and I love that I can read reviews before booking. My favorite part is the convenience of booking last-minute appointments without any hassle",
  },
  {
    id: 2,
    image: "/customer2.png",
    text: "FLAURY has simplified my booking process and allowed me to focus more on my clients. The automated reminders have reduced the number of missed appointments, and I love how easy it is to manage my schedule. It's been a great tool for growing my business and providing better service to my clients.",
  },
  {
    id: 3,
    image: "/customer2.png",
    text: "FLAURY has simplified my booking process and allowed me to focus more on my clients. The automated reminders have reduced the number of missed appointments, and I love how easy it is to manage my schedule. It's been a great tool for growing my business and providing better service to my clients.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = 320;
    const newScrollPosition =
      direction === "left"
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-16 px-4 sm:px-8 lg:px-24 w-full">
      <h3 className="text-primary font-semibold text-xl sm:text-2xl text-center mb-6">
        What Our Customers Are Saying
      </h3>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth snap-x snap-mandatory no-scrollbar py-4"
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[300px] md:min-w-[450px] snap-start bg-primary text-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-md transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={`Customer ${testimonial.id}`}
                className="w-full md:w-1/3 h-40 md:h-auto object-cover"
              />
              <div className="p-4 text-sm md:text-base my-auto leading-relaxed">
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-secondary border border-primary rounded-full p-3 shadow-md hover:bg-primary hover:text-white transition"
        >
          <img src={arrowLeft} alt="Scroll left" className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-secondary border border-primary rounded-full p-3 shadow-md hover:bg-primary hover:text-white transition"
        >
          <img src={arrowRight} alt="Scroll right" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
