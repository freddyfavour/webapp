import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthEnv from "../../components/AuthEnv";
import AuthTitle from "../../components/AuthTitle";
import authAPI  from "../../api/user/auth";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit } = useForm();
  
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    
    try {
      const userData = {
        email: formData.email,
        password: formData.password,
      };
      
      const result = await authAPI.authAPI.login(userData);
      
      if (result.success) {
        // Login was successful
        const response = result.data;
        
        // Store user data and token
        if (response && response.user) {
          localStorage.setItem("savedUser", JSON.stringify(response.user));
        }
        
        if (response && response.token) {
          localStorage.setItem("authToken", response.token);
        }

        // Set auth
        if (response && response.user) {
          localStorage.setItem("isAuth", true);
        }
        
        toast.success("Login successful!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } else {
        // Handle errors based on status code
        const error = result.error;
        
        if (error.status === 403) {
          toast.error("Email is not verified.");
        } else if (error.status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.status === 400) {
          toast.error("Missing email or password.");
        } else {
          toast.error(error.message || "Login failed. Please try again.");
        }
        
        console.error("Login error:", error);
      }
    } catch (unexpectedError) {
      // This would only happen if there's an error in our login function itself
      console.error("Unexpected error:", unexpectedError);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthEnv>
        <AuthTitle title="Login" />
        <p className="text-primaryColor text-sm pb-2">
          Log in to your Flaury account
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            validateType="email"
          />
          <Input
            control={control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            validateType="password"
          />

          <div className="w-full flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>
            <Link
              to="/forgot-password"
              className="text-primaryColor font-bold text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            title={isSubmitting ? "Processing..." : "Continue"}
            type="submit"
            customClasses="w-full px-4 py-3 mt-6"
            disabled={isSubmitting}
          />
        </form>
        <p className="text-primaryColor text-sm mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold">
            Sign up
          </Link>
        </p>
      </AuthEnv>
    </>
  );
};

export default Login;