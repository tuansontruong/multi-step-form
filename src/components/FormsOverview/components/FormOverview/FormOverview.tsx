import { Case, Switch } from "react-if";

import { Separator } from "@common";
import { useLocationHash, useFormManagement } from "@hooks";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";
import {
  ChallengePreferenceStep,
  PersonalInformationStep,
  SkillLevelStep,
} from "..";

const numberOfSteps = 4;

export function FormOverview() {
  const { currentHash, proceedToNextHash, goBackToPrevHash } =
    useLocationHash();

  const {
    personalInformationStepRef,
    personalInformationData,

    onSubmitGlobal,
    onValidateCurrentForm,
  } = useFormManagement({ currentHash, proceedToNextHash });

  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentRoute={currentHash} />

        <Separator />

        <Switch>
          <Case condition={currentHash === "#PersonalInfomation"}>
            <PersonalInformationStep
              onSubmitGlobal={onSubmitGlobal}
              ref={personalInformationStepRef}
              defaultValues={personalInformationData}
            />
          </Case>
          <Case condition={currentHash === "#SkillLevel"}>
            <SkillLevelStep />
          </Case>
          <Case condition={currentHash === "#ChallengePreference"}>
            <ChallengePreferenceStep />
          </Case>
        </Switch>

        <Separator />

        <FormFooter
          proceedToNextStep={onValidateCurrentForm}
          goBackToPrevStep={goBackToPrevHash}
          isFirstStep={currentHash === "#PersonalInfomation"}
          isLastStep={!currentHash}
        />
      </div>
    </div>
  );
}
