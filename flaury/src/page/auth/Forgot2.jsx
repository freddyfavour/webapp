import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthEnv from "../../components/AuthEnv";
import Button from "../../components/Button";
import AuthTitle from "../../components/AuthTitle";

const Forgot2 = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [seconds, setSeconds] = useState(59);
  const [disabled, setDisabled] = useState(false);
  const [resendText, setResendText] = useState("Resend Code");
  const navigate = useNavigate();

  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);

    handleFormValidation();
  };

  const handleSubmit = (e) => {
    navigate("/forgot3");
  };

  const handleFormValidation = () => {
    if (
      code1.trim() !== "" &&
      code2.trim() !== "" &&
      code3.trim() !== "" &&
      code4.trim() !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setResendText("Resend Code");
        }
        return Math.max(prevSeconds - 1, 0); // Ensures countdown doesn't go below 0
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AuthEnv
      children={
        <>
          <AuthTitle title="Forgot Password" />

          <p className="text-primary text-sm pb-6">
            Enter the code sent to your email
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4">
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="1"
                inputMode="numeric"
                value={code1}
                onChange={(e) => handleInputChange(e, setCode1)}
                className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${code1 !== "" ? "bg-red-200" : "bg-gray-200"
                  }`}
              />
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="1"
                inputMode="numeric"
                value={code2}
                onChange={(e) => handleInputChange(e, setCode2)}
                className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${code2 !== "" ? "bg-red-200" : "bg-gray-200"
                  }`}
              />
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="1"
                inputMode="numeric"
                value={code3}
                onChange={(e) => handleInputChange(e, setCode3)}
                className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${code3 !== "" ? "bg-red-200" : "bg-gray-200"
                  }`}
              />
              <input
                type="text"
                pattern="[0-9]*"
                maxLength="1"
                inputMode="numeric"
                value={code4}
                onChange={(e) => handleInputChange(e, setCode4)}
                className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 text-center ${code4 !== "" ? "bg-red-200" : "bg-gray-200"
                  }`}
              />
            </div>
            <Button
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
              disabled={
                code1 === "" || code2 === "" || code3 === "" || code4 === ""
              }
            />
          </form>

          <p className="text-primary text-sm mt-12">
            {seconds > 0 ? `Resend code in ${seconds} seconds` : resendText}
          </p>
        </>
      }
    />
  );
};

export default Forgot2;
