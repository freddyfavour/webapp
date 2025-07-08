import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/store/authstore";

// Step components
import Step1BasicInfo from "@/components/registration/step1BasicInfo";
import Step2BusinessInfo from "@/components/registration/step2BusinessDetails";
import Step3ContactInfo from "@/components/registration/step3BusinessDetails";
import Step4Confirmation from "@/components/registration/step4BusinessVerification";
import AuthEnv from "@/components/AuthEnv";

const Registration = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get registration state from zustand store
  const {
    initRegistration,
    registrationType,
    currentStep,
    totalSteps,
    nextStep,
    resetRegistration,
  } = useAuthStore();

  // Initialize registation based on URL parameter
  useEffect(() => {
    const type = searchParams.get("role") || "customer";

    // Only initialize if not already initialized or if type changed
    if (!registrationType || registrationType !== type) {
      initRegistration(type);
    }
  }, [searchParams, initRegistration, registrationType]);

  // Handle step completion
  const handleStepComplete = async () => {
    const hasNextStep = nextStep();

    if (!hasNextStep) {
      // Registration complete, redirect to sign in
      resetRegistration();
      navigate("/signin");
    }
  };

  // Determine which step component to render
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo onComplete={handleStepComplete} />;
      case 2:
        return <Step2BusinessInfo onComplete={handleStepComplete} />;
      case 3:
        return <Step3ContactInfo onComplete={handleStepComplete} />;
      case 4:
        return <Step4Confirmation onComplete={handleStepComplete} />;
      default:
        navigate("/choose-role");
        return <div>Error</div>;
    }
  };

  return (
    <AuthEnv children={renderStep()} />
  )
};

export default Registration;