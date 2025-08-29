import React from "react";
import PropTypes from "prop-types";

const Button = ({
  title,
  type = "button",
  customClasses = "",
  disabled = false,
  onClick = null,
}) => {
  return (
    <button
      type={type}
      className={`transition bg-primary text-white border text-xs px-6 py-2 rounded-lg font-semibold ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${customClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  customClasses: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
