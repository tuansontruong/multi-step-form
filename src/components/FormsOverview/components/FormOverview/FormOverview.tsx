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
    skillLevelStepRef,
    challengePreferenceStepRef,

    personalInformationData,
    skillLevelData,
    challengePreferenceData,

    onSubmitGlobal,
    validateFormThenProceed,
  } = useFormManagement({ currentHash, proceedToNextHash, goBackToPrevHash });

  const onClickNextBtn = () => {
    validateFormThenProceed("next");
  };

  const onClickBackBtn = () => {
    // last step no need to validate form when click 'back' button
    if (currentHash === "#ReviewAndConfirm") {
      goBackToPrevHash();
      return;
    }

    validateFormThenProceed("back");
  };

  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white shadow-xl rounded-xl p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentRoute={currentHash} />

        <Separator />

        <Switch>
          <Case condition={currentHash === "#PersonalInfomation"}>
            <PersonalInformationStep
              onSubmitGlobal={onSubmitGlobal}
              ref={personalInformationStepRef}
              defaultValues={personalInformationData.current}
            />
          </Case>
          <Case condition={currentHash === "#SkillLevel"}>
            <SkillLevelStep
              onSubmitGlobal={onSubmitGlobal}
              ref={skillLevelStepRef}
              defaultValues={skillLevelData.current}
            />
          </Case>
          <Case condition={currentHash === "#ChallengePreference"}>
            <ChallengePreferenceStep
              onSubmitGlobal={onSubmitGlobal}
              ref={challengePreferenceStepRef}
              defaultValues={challengePreferenceData.current}
            />
          </Case>
        </Switch>

        <Separator />

        <FormFooter
          proceedToNextStep={onClickNextBtn}
          goBackToPrevStep={onClickBackBtn}
          isFirstStep={currentHash === "#PersonalInfomation"}
          isLastStep={currentHash === "#ReviewAndConfirm"}
        />
      </div>
    </div>
  );
}
