import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import forgotPassword from "/forgotpassword.svg";
import AuthEnv from "@/components/AuthEnv";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import AuthTitle from "@/components/AuthTitle";

// TODO: Switch forgot password from single pages to a 3 step process. 
// Similar to registration. 

const ForgotPassword = () => {
  const { control, handleSubmit, watch } = useForm();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    navigate("/forgot2");
  };

  return (
    <AuthEnv
      children={
        <>
          <AuthTitle title="Forgot Password" />
          <img src={forgotPassword} alt="" />
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="email"
              label="Enter your registered email address"
              placeholder="Enter your email"
              validateType="email"
            />
            <Button
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
            />
          </form>
        </>
      }
    />
  );
};

export default ForgotPassword;
