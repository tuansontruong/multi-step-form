import { useEffect, useState } from "react";

const steptoHashMapper = {
  1: "#PersonalInfomation",
  2: "#SkillLevel",
  3: "#ChallengePreference",
};

const hashToStepMapper = {
  "#PersonalInfomation": 1,
  "#SkillLevel": 2,
  "#ChallengePreference": 3,
};

export function useSteps() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const onReloadPage = () => {
    const hash = window.location.hash as keyof typeof hashToStepMapper;
    setCurrentStep(hashToStepMapper[hash]);
  };

  useEffect(() => {
    window.addEventListener("load", onReloadPage);
    return () => {
      window.removeEventListener("load", onReloadPage);
    };
  }, []);

  const proceedToNextStep = () => {
    window.location.hash =
      steptoHashMapper[(currentStep + 1) as keyof typeof steptoHashMapper];
    setCurrentStep((prev) => {
      return prev + 1;
    });
  };
  const goBackToPrevStep = () => {
    window.location.hash =
      steptoHashMapper[(currentStep - 1) as keyof typeof steptoHashMapper];
    setCurrentStep((prev) => {
      return prev - 1;
    });
  };

  return {
    currentStep,
    proceedToNextStep,
    goBackToPrevStep,
  };
}
