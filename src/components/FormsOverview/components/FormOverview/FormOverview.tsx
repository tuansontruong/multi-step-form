import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { PersonalInformationForm } from "../PersonalInformationForm";
import { FormFooter } from "../FormFooter";
import { useSteps } from "../../hooks/useSteps";
import { Case, Switch } from "react-if";

const numberOfSteps = 4;

export function FormOverview() {
  const { currentStep, proceedToNextStep, goBackToPrevStep } = useSteps();
  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentStep={currentStep} />

        <Separator />

        <Switch>
          <Case condition={currentStep == 1}>
            <PersonalInformationForm />
          </Case>
          <Case condition={currentStep == 2}>
            <div>Skill level</div>
          </Case>
          <Case condition={currentStep == 3}>
            <div>Challenge Preference</div>
          </Case>
          <Case condition={currentStep == 4}>
            <div>Review and confirm</div>
          </Case>
        </Switch>

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
