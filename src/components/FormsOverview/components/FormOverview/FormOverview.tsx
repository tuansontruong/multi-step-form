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
import { SetStateAction, useState } from "react";
import { ReviewAndConfirm } from "../ReviewAndConfirm";

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
  } = useFormManagement({
    currentHash,
    proceedToNextHash,
    goBackToPrevHash,
    setAppError,
  });

  const onClickNextBtn = () => {
    validateFormThenProceed("next");
  };

  const onClickBackBtn = () => {
    // for last step, no need to validate form when click 'back' button
    if (currentHash === "#ReviewAndConfirm") {
      goBackToPrevHash();
      return;
    }

    validateFormThenProceed("back");
  };

  const [isProccessing, setIsProccessing] = useState(false);
  const postUserData = () => {
    setIsProccessing(true);
    const fetchApi = new Promise((resolve) => {
      setTimeout(() => resolve("done"), 2000);
    });

    fetchApi
      .then(() => {
        console.log("post succeed");
        window.location.hash = "#Success";
      })
      .finally(() => {
        setIsProccessing(false);
      });
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
            <ReviewAndConfirm
              personalInformationData={personalInformationData}
              skillLevelData={skillLevelData!}
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
      </div>
    </div>
  );
}
