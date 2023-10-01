import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";
import { useSteps } from "../../hooks/useSteps";
import { Case, Switch } from "react-if";

import { PersonalInformationStep } from "../PersonalInformationStep";
import { SkillLevelStep } from "../SkillLevelStep";
import { ChallengePreferenceStep } from "../ChallengePreferenceStep";

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
            <PersonalInformationStep />
          </Case>
          <Case condition={currentStep == 2}>
            <SkillLevelStep />
          </Case>
          <Case condition={currentStep == 3}>
            <ChallengePreferenceStep />
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
