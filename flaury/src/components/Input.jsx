import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

const Input = ({
  control,
  name,
  placeholder,
  type = "text",
  rules = {},
  label,
  errorMessage,
  validateType,
  minValue,
  prevValue,
  defaultValue = "", // Add defaultValue with empty string as default
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Validation handlers
  const validateInput = (value) => {
    // Add safety check to handle undefined/null values
    if (!value && validateType !== "required") return true;
    
    switch (validateType) {
      case "email":
        return (
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address."
        );
      case "password":
        return (
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          ) ||
          "Password must be at least 8 characters, include one letter, one number, and one special character."
        );
      case "code":
        return (
          /^[A-Za-z0-9]{6}$/.test(value) || 
          "Code must be exactly 6 alphanumeric characters."
        );
      case "min":
        return (
          value.length >= minValue || `Must be at least ${minValue} characters.`
        );
      case "confirmPassword":
        return value === prevValue || "Passwords must match.";
      default:
        return true;
    }
  };

  return (
    <div style={{ marginBottom: "1rem", position: "relative", background: "#FEFFF1" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue} // Set default value here
        rules={{
          required: errorMessage || "This field is required.",
          validate: validateInput,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              id={name}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder}
              value={field.value || ""} // Ensure value is never undefined
              className="custom-input"
              style={{
                padding: "4px",
                borderRadius: "4px",
                // border: `1px solid ${error ? "red" : "#ccc"}`,
                width: "100%",
                paddingRight: type === "password" ? "2.5rem" : "0.5rem",
              }}
              maxLength={validateType === "code" ? 6 : undefined}
            />
            {type === "password" && (
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0.5rem",
                  top: "70%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {!showPassword ? "👁️" : "🙈"}
              </span>
            )}
            {error && (
              <span style={{ color: "red", fontSize: "0.875rem" }}>
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.object.isRequired, // From react-hook-form's useForm
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  rules: PropTypes.object,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  validateType: PropTypes.oneOf([
    "email",
    "password",
    "min",
    "confirmPassword",
    "phoneNumber",
    "code", // Added new validation type
  ]),
  minValue: PropTypes.number,
  prevValue: PropTypes.string, // For confirmPassword validation
  defaultValue: PropTypes.string, // Add defaultValue prop
};

export default Input;