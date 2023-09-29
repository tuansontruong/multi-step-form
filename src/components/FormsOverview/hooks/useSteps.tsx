import { useState } from "react";

export function useSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const proceedToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const goBackToPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return {
    currentStep,
    proceedToNextStep,
    goBackToPrevStep,
  };
}
