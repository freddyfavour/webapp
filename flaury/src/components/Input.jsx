import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

// Validation logic extracted for cleaner code
const validationRules = (validateType, minValue, prevValue) => (value) => {
  if (!value && validateType !== "required") return true;

  switch (validateType) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address.";
    case "password":
      return (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
        "Password must be at least 8 characters, include one letter, one number, and one special character."
      );
    case "code":
      return /^[A-Za-z0-9]{6}$/.test(value) || "Code must be exactly 6 alphanumeric characters.";
    case "min":
      return value.length >= minValue || `Must be at least ${minValue} characters.`;
    case "confirmPassword":
      return value === prevValue || "Passwords must match.";
    default:
      return true;
  }
};

const Input = ({
  control,
  name,
  placeholder = "",
  type = "text",
  rules = {},
  label,
  errorMessage,
  validateType,
  minValue,
  prevValue,
  defaultValue = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Memoize the validate function for better performance
  const validateInput = useMemo(
    () => validationRules(validateType, minValue, prevValue),
    [validateType, minValue, prevValue]
  );

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div style={{ marginBottom: "1rem", position: "relative", background: "#FEFFF1" }}>
      {label && <label htmlFor={name}>{label}</label>}

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
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
              type={type === "password" ? (showPassword ? "text" : "password") : type}
              placeholder={placeholder}
              value={field.value || ""}
              className={`custom-input ${type === "password" ?
                "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-gray-400"
                : "p-3 w-full"}`}
              style={{
                borderRadius: "4px",
                border: `1px solid ${error ? "red" : "#ccc"}`,
              }}
              maxLength={validateType === "code" ? 6 : undefined}
            />
            {type === "password" && (
              <button
                className="absolute right-3 top-12 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
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
  control: PropTypes.object.isRequired,
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
    "code",
  ]),
  minValue: PropTypes.number,
  prevValue: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
