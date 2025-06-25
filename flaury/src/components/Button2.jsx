import React from "react";
import PropTypes from "prop-types";

const Button2 = ({
  title,
  type = "button",
  customClasses = "", // Renamed to customClasses for clarity
  disabled = false,
  onClick = null,
}) => {
  return (
    <button
      type={type}
      className={`transition bg-primary text-white border text-xs px-6 py-2 rounded-lg font-semibold opacity-50 w-full"
 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${customClasses}`} // Applied customClasses here
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button2.propTypes = {
  title: PropTypes.string.isRequired, // Text displayed on the button
  type: PropTypes.oneOf(["button", "submit", "reset"]), // HTML button type
  customClasses: PropTypes.string, // More custom classes for flexibility
  disabled: PropTypes.bool, // Disabled state
  onClick: PropTypes.func, // Click handler
};

Button2.defaultProps = {
  type: "button",
  className: "",
  customClasses: "", // Default to an empty string for customClasses
  disabled: false,
  onClick: null,
};

export default Button2;
