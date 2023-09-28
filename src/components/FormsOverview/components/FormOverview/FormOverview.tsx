import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { PersonalInformationForm } from "../PersonalInformationForm";
import { FormFooter } from "../FormFooter";
import { useState } from "react";

export function FormOverview() {
  const [currentStep, setCurrentStep] = useState(2);
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={4} currentStep={currentStep} />
        <Separator />
        <PersonalInformationForm />
        <Separator />
        <FormFooter isFirstStep={currentStep == 1} />
      </div>
    </div>
  );
}
