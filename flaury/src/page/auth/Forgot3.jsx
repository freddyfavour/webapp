import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthEnv from "../../components/AuthEnv";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import AuthTitle from "../../components/AuthTitle";

const Forgot3 = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, watch } = useForm();

  const onSubmit = (e) => {
    navigate("/login");
  };

  return (
    <AuthEnv
      children={
        <>
          <AuthTitle title="Create Password" />

          <p className="text-primaryColor text-sm pb-2">
            Register using your correct details
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              validateType="password"
            />
            <Input
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter your password"
              validateType="confirmPassword"
              prevValue={watch("password")}
            />
            <Button
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
            />
          </form>

          <p className="text-primaryColor text-sm mt-8 text-left">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Log in
            </Link>
          </p>
        </>
      }
    />
  );
};

export default Forgot3;
