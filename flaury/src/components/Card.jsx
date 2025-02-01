import React from "react";

const Card = ({ children, style = null }) => {
  return (
    <div
      className="w-full md:w-[70%] md:max-w-[768px] p-10 md:px-20 md:py-10 bg-white md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75"
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
