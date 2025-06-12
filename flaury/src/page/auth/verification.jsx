import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "/success.svg";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import AuthEnv from "../../components/AuthEnv";
import Popup from "../../components/Popup";
import AuthTitle from "../../components/AuthTitle";
import authAPI from "../../api/user/auth";

const Verification = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const { control, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        setIsSubmitting(true);

        try {
            const userData = {
                code: formData.code,
                email: formData.email,
            };

            const result = await authAPI.authAPI.verifyEmail(userData);

            if (result.success) {
                // const response = result.data;

                toast.success("Verification successful");

                setShowPopup(true);

                setTimeout(() => {
                    navigate("/dashboard");
                }, 3000);
            } else {
                const error = result.error;

                if (error.status === 400) {
                    toast.error("Invalid verification code.");
                } else if (error.status === 404) {
                    toast.error("No account found with this email.");
                } else {
                    toast.error(error.message || "Verification failed. Please try again.");
                }
            }
        } catch (error) {
            console.error("Unexpected error: ", error);
            toast.error("An unexpected error occured. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <AuthEnv
                children={
                    <>
                        <AuthTitle title="Verification" />
                        <p className="text-primary text-sm pb-2">
                            Verify your email using pin sent to
                        </p>
                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                control={control}
                                name="code"
                                label="Code"
                                validateType="code"
                                errorMessage="A valid verification code is required."
                            />
                            <Button
                                title={isSubmitting ? "Loading..." : "Contiue"}
                                type="submit"
                                customClasses="w-full px-4 py-3 mt-6"
                            />
                        </form>
                    </>
                }
            />
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
    )
}