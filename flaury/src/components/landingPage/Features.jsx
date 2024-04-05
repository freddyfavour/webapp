import React from "react";
import handshakefill from "/handshake-fill.svg";
import money from "/money.svg";
import globe from "/globe.svg";
import customersupport from "/customersupport.svg";
import handshakeoutline from "/handshake-outline.svg";

const Features = () => {
  // Simulated data from backend
  const featuresData = [
    {
      icon: handshakefill,
      text: "You get a variety of top-notch professionals at your advantage",
    },
    {
      icon: money,
      text: "You get services at your comfort without breaking the bank",
    },
    {
      icon: globe,
      text: "You get geo-diversified professionals from anywhere in the world",
    },
    {
      icon: customersupport,
      text: "You get a reliable customer support service 24/7 without fail",
    },
    {
      icon: handshakeoutline,
      text: "You get quality escrow services to ensure you pay when you're satisfied with the services rendered",
    },
  ];

  return (
    <section className="mt-20 px-4 md:px-20 py-10 text-center bg-secondaryColor">
      <h3 className="text-primaryColor text-2xl font-bold py-4">At FLAURY,</h3>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 justify-center">
        {/* Map over featuresData to render features */}
        {featuresData.map((feature, index) => (
          <div key={index} className="flex flex-col items-center mx-4 my-4">
            <img src={feature.icon} alt="" />
            <p className="text-primaryColor text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
