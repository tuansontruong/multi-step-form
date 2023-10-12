import { SetStateAction } from "react";
import { Case, Else, If, Switch, Then } from "react-if";

import { Separator } from "@common";
import { useLocationHash, useFormManagement, usePostData } from "@hooks";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";
import {
  ChallengePreferenceStep,
  PersonalInformationStep,
  SkillLevelStep,
  ReviewAndConfirmStep,
  SucceedScreen,
} from "..";

const numberOfSteps = 4;

export function FormOverview({
  setAppError,
}: {
  setAppError: SetStateAction<any>;
}) {
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

    isAllFormsValidated,
  } = useFormManagement({
    currentHash,
    proceedToNextHash,
    goBackToPrevHash,
    setAppError,
  });

  const { postData: postUserData, isProccessing } = usePostData({
    personalInformationData,
    skillLevelData,
    challengePreferenceData,
  });

  const onClickNextBtn = () => {
    validateFormThenProceed("next");
  };

  const onClickBackBtn = () => {
    // for last step, no need to validate when user clicks 'back' button
    if (currentHash === "#ReviewAndConfirm") {
      goBackToPrevHash();
      return;
    }
    // for other steps, validate form then go back to previous step
    validateFormThenProceed("back");
  };

  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white shadow-xl rounded-xl p-4">
      <div className="flex flex-col gap-6">
        <If condition={currentHash !== "#Success"}>
          <Then>
            <FormSteps
              numberOfSteps={numberOfSteps}
              currentRoute={currentHash}
            />

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
                <SkillLevelStep
                  onSubmitGlobal={onSubmitGlobal}
                  ref={skillLevelStepRef}
                  defaultValues={skillLevelData}
                />
              </Case>
              <Case condition={currentHash === "#ChallengePreference"}>
                <ChallengePreferenceStep
                  onSubmitGlobal={onSubmitGlobal}
                  ref={challengePreferenceStepRef}
                  defaultValues={challengePreferenceData}
                />
              </Case>
              <Case condition={currentHash === "#ReviewAndConfirm"}>
                <ReviewAndConfirmStep
                  personalInformationData={personalInformationData}
                  skillLevelData={skillLevelData}
                  challengePreferenceData={challengePreferenceData}
                />
              </Case>
            </Switch>

            <Separator />

            <FormFooter
              proceedToNextStep={onClickNextBtn}
              goBackToPrevStep={onClickBackBtn}
              isFirstStep={currentHash === "#PersonalInfomation"}
              isLastStep={currentHash === "#ReviewAndConfirm"}
              postUserData={postUserData}
              isProccessing={isProccessing}
            />
          </Then>
          <Else>
            <SucceedScreen isAllFormsValidated={isAllFormsValidated()} />
          </Else>
        </If>
      </div>
    </div>
  );
}
