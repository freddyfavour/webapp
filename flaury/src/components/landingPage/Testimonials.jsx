import React, { useState } from "react";
import arrowLeft from "/arrowLeft-brown.svg";
import arrowRight from "/arrowRight-brown.svg";

// Simulated data from backend
const testimonialsData = [
  {
    id: 1,
    image: "/customer1.png",
    text: "FLAURY offers superb professionals to offer their services... My ability to source for freelancers even from other locations made my search very easy...",
    author: "Mary Jones",
  },
  {
    id: 2,
    image: "/customer2.png",
    text: "FLAURY offers superb professionals to offer their services... My ability to source for freelancers even from other locations made my search very easy...",
    author: "John Doe",
  },
];

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const container = document.getElementById("services-container");
    if (container) {
      const newPosition = scrollPosition - 300;
      setScrollPosition(newPosition >= 0 ? newPosition : 0);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("services-container");
    if (container) {
      const newPosition = scrollPosition + 300;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollPosition(newPosition <= maxScroll ? newPosition : maxScroll);
      container.scrollTo({
        left: newPosition <= maxScroll ? newPosition : maxScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-10 px-4 lg:px-20">
      <h3 className="text-primaryColor font-semibold text-xl text-center py-4">
        What Our Customers Are Saying
      </h3>
      <div className="relative flex gap-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="lg:flex bg-secondaryColor lg:bg-primaryColor text-primaryColor lg:text-white items-center"
          >
            <img src={testimonial.image} alt="" className="w-full" />
            <div className="px-2 py-2 lg:py-0 lg:px-10 text-xs lg:text-normal">
              <p>{testimonial.text}</p>
              <span>__{testimonial.author}</span>
            </div>
          </div>
        ))}
        <button
          onClick={scrollLeft}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full px-4 py-[0.8rem] border border-primaryColor"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full px-4 py-[0.8rem] border border-primaryColor"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
