import React from "react";

const Card = ({ children, className = "", style = null }) => {
  return (
    <div
      className={`w-full md:w-[768px] m-3 p-4 md:px-20 bg-[#FEFFF1] md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75 rounded-md ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
