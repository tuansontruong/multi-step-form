import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { PersonalInformationForm } from "../PersonalInformationForm";
import { FormFooter } from "../FormFooter";
import { useSteps } from "../../hooks/useSteps";

export function FormOverview() {
  const { currentStep, proceedToNextStep, goBackToPrevStep } = useSteps();
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={4} currentStep={currentStep} />
        <Separator />
        <PersonalInformationForm />
        <Separator />
        <FormFooter
          proceedToNextStep={proceedToNextStep}
          goBackToPrevStep={goBackToPrevStep}
          isFirstStep={currentStep == 1}
        />
      </div>
    </div>
  );
}
