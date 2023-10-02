import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";
import { useSteps } from "../../hooks/useSteps";
import { useSimpleHashRouter } from "../../hooks/useSimpleHashRouter";

const numberOfSteps = 4;

export function FormOverview() {
  const { currentStep, proceedToNextStep, goBackToPrevStep } = useSteps();
  const CurrentRoute = useSimpleHashRouter();
  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentStep={currentStep} />

        <Separator />

        {CurrentRoute && <CurrentRoute />}

        <Separator />

        <FormFooter
          proceedToNextStep={proceedToNextStep}
          goBackToPrevStep={goBackToPrevStep}
          isFirstStep={currentStep == 1}
          isLastStep={currentStep == numberOfSteps}
        />
      </div>
    </div>
  );
}
