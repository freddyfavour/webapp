import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Card from "../Card";
import Button from "../Button";
import authAPI from "@/api/user/auth";
import { useLocation, useRoute } from "react-router-dom";

const OTPVerification = ({ email, complete }) => {
  const [code1, setCode1] = React.useState("");
  const [code2, setCode2] = React.useState("");
  const [code3, setCode3] = React.useState("");
  const [code4, setCode4] = React.useState("");
  const [code5, setCode5] = React.useState("");
  const [code6, setCode6] = React.useState("");
  const [seconds, setSeconds] = React.useState(59);
  const [disabled, setDisabled] = React.useState(false);
  const [resendCode, setResendCode] = React.useState("Resend Code");
  const [showPopup, setShowPopup] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { search } = useLocation();
  const navigate = useRoute();
  const role = new URLSearchParams(search).get("role");

  // Create refs for all input fields
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  // Focus on the first input when component mounts
  useEffect(() => {
    input1Ref.current?.focus();
  }, []);

  // Handle input change and auto-focus next input
  const handleInputChange = (e, setter, nextInputRef) => {
    const { value } = e.target;

    // Only accept alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]/g, "");

    // Update the current input value
    setter(filteredValue.slice(0, 1));

    // Move to next input if a character was entered
    if (filteredValue && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  // Handle backspace and move to previous input if needed
  const handleKeyDown = (e, previousInputRef) => {
    if (e.key === "Backspace" && e.target.value === "" && previousInputRef) {
      previousInputRef.current?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const code = code1 + code2 + code3 + code4 + code5 + code6;

    try {
      const userData = {
        code: code,
        email: email,
      };

      const result = await authAPI.authAPI.verifyEmail(userData);

      if (result.success && role === "service_provider") {
        toast.success("Verification successful");

        setShowPopup(true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else if (result.success && role === "client") {
        toast.success("Verification successful");
        complete();
      } else {
        const error = result.error;

        if (error.status === 400) {
          toast.error("Invalid verification code.");
        } else if (error.status === 404) {
          toast.error("No account found with this email.");
        } else {
          toast.error(
            error.message || "Verification failed. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Unexpected error: ", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormValidation = () => {
    if (
      code1.trim() !== "" &&
      code2.trim() !== "" &&
      code3.trim() !== "" &&
      code4.trim() !== "" &&
      code5.trim() !== "" &&
      code6.trim() !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Handle resend code timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setResendCode("Resend Code");
        }
        return Math.max(prevSeconds - 1, 0); // Ensures countdown doesn't go below 0
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-submit when all fields are filled
  React.useEffect(() => {
    if (code1 && code2 && code3 && code4 && code5 && code6) {
      handleFormValidation();
    }
  }, [code1, code2, code3, code4, code5, code6]);

  return (
    <>
      {!showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-20">
          <Card className="md:max-w-[574px]">
            <h3 className="font-bold mb-4 text-primary">
              OTP Verification
            </h3>
            <p className="mb-4 text-xs text-black">
              Please enter the OTP sent to your email to verify your account
            </p>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex justify-center gap-4">
                <input
                  ref={input1Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code1}
                  onChange={(e) => handleInputChange(e, setCode1, input2Ref)}
                  onKeyDown={(e) => handleKeyDown(e, null)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center focus:bg-[#FFD6B3] `}
                />
                <input
                  ref={input2Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code2}
                  onChange={(e) => handleInputChange(e, setCode2, input3Ref)}
                  onKeyDown={(e) => handleKeyDown(e, input1Ref)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center focus:bg-[#FFD6B3] `}
                />
                <input
                  ref={input3Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code3}
                  onChange={(e) => handleInputChange(e, setCode3, input4Ref)}
                  onKeyDown={(e) => handleKeyDown(e, input2Ref)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center focus:bg-[#FFD6B3] `}
                />
                <input
                  ref={input4Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code4}
                  onChange={(e) => handleInputChange(e, setCode4, input5Ref)}
                  onKeyDown={(e) => handleKeyDown(e, input3Ref)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center focus:bg-[#FFD6B3] `}
                />
                <input
                  ref={input5Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code5}
                  onChange={(e) => handleInputChange(e, setCode5, input6Ref)}
                  onKeyDown={(e) => handleKeyDown(e, input4Ref)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center focus:bg-[#FFD6B3] `}
                />
                <input
                  ref={input6Ref}
                  type="text"
                  maxLength={1}
                  inputMode="alphanumeric"
                  value={code6}
                  onChange={(e) => handleInputChange(e, setCode6, null)}
                  onKeyDown={(e) => handleKeyDown(e, input5Ref)}
                  className={`outline-none w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 text-center focus:bg-[#FFD6B3] `}
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-primary text-sm">
                  {seconds > 0
                    ? `Resend code in ${seconds} seconds`
                    : resendCode}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  title="Continue"
                  customClasses="w-full mx-20 px-4 py-3 mt-6"
                  disabled={
                    code1 === "" ||
                    code2 === "" ||
                    code3 === "" ||
                    code4 === "" ||
                    code5 === "" ||
                    code6 === "" ||
                    isSubmitting
                  }
                />
              </div>
            </form>
          </Card>
        </div>
      )}
      {showPopup && (
        <div className="absolute top-0 left-0">
          <Popup
            title="Congratulations"
            subtitle="Your account is now ready to use. You will be redirected to
        your homepage shortly."
            image={success}
          />
        </div>
      )}
    </>
  );
};

export default OTPVerification;
