import React from "react";
import Card from "./Card";
import Button from "./Button";
import Button2 from "./Button2";

const Popup = ({
  title,
  subtitle,
  image,
  button,
  buttonStyle,
  button1Title,
  button1Handler,
  button2Title,
  button2Handler,
}) => {
  return (
    // <div className="relative h-screen w-screen flex justify-center items-center">
    <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-20">
      <Card className="flex flex-col h-[25rem] md:max-w-[574px] w-4/5 md:w-[45%] p-6 items-center justify-center text-center">
        <img src={image} alt="Success" className="mx-auto mb-4" />
        <h3 className="font-bold mb-4 text-primary">{title}</h3>
        <p className="mb-4 text-xs text-black">{subtitle}</p>

        {/* Conditional Rendering for Buttons */}
        {button && (
          <div className="flex justify-center gap-4">
            {button >= 1 && (
              <Button
                title={button1Title}
                onClick={button1Handler}
                customClasses={buttonStyle}
              />
            )}
            {button === 2 && (
              <Button2
                title={button2Title}
                onClick={button2Handler}
                customClasses={buttonStyle}
              />
            )}
          </div>
        )}

      </Card>
    </div>
    // </div>
  );
};

export default Popup;
