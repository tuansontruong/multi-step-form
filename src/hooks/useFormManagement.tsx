import { useRef } from "react";

import { ROUTES_KEY } from "@types";
import { PersonalInformation, SkillLevel, ChallengePreference } from "@models";
import { userSchema } from "@schemas";

export interface IuseFormManagementProps {
  currentHash: ROUTES_KEY;
  proceedToNextHash: () => void;
  goBackToPrevHash: () => void;
}

export function useFormManagement({
  currentHash,
  proceedToNextHash,
  goBackToPrevHash,
}: IuseFormManagementProps) {
  // ref to submit each form from parent component
  const personalInformationStepRef = useRef<HTMLFormElement>(null);
  const skillLevelStepRef = useRef<HTMLFormElement>(null);
  const challengePreferenceStepRef = useRef<HTMLFormElement>(null);

  // states to store data of each form
  const personalInformationData = useRef<PersonalInformation>({
    fullName: "",
    email: "",
    phoneNumber: "",
    portfolioUrl: "",
  });
  const skillLevelData = useRef<SkillLevel>();
  const challengePreferenceData = useRef<ChallengePreference>({
    challenge: [],
  });

  // ref for action after validation succeed
  const nextCTA = useRef<string>();

  const validateFormThenProceed = (nextAction: "next" | "back") => {
    if (currentHash === "#PersonalInfomation") {
      personalInformationStepRef.current?.submit();
    }
    if (currentHash === "#SkillLevel") {
      skillLevelStepRef.current?.submit();
    }
    if (currentHash === "#ChallengePreference") {
      challengePreferenceStepRef.current?.submit();
    }
    // set next action to be executed after validation succeed
    nextCTA.current = nextAction;
  };

  const proceedAfterValidation = () => {
    if (nextCTA.current === "next") {
      proceedToNextHash();
    } else if (nextCTA.current === "back") {
      goBackToPrevHash();
    }
  };

  const isAllFormsValidated = () => {
    return userSchema.isValidSync({
      ...personalInformationData.current,
      ...skillLevelData.current,
      ...challengePreferenceData.current,
    });
  };
  // execute this function means the current form is validated successfully
  const onSubmitGlobal = (data: any) => {
    if (currentHash === "#PersonalInfomation") {
      personalInformationData.current = data;
    }
    if (currentHash === "#SkillLevel") {
      skillLevelData.current = data;
    }
    if (currentHash === "#ChallengePreference") {
      challengePreferenceData.current = data;

      // only check validation of all forms before user proceed to 'review & confirm' step
      if (nextCTA.current === "next" && !isAllFormsValidated()) {
        alert("please fill all fields");
        return;
      }
    }
    proceedAfterValidation();
    nextCTA.current = undefined;
  };

  return {
    personalInformationStepRef,
    skillLevelStepRef,
    challengePreferenceStepRef,

    onSubmitGlobal,

    personalInformationData,
    skillLevelData,
    challengePreferenceData,

    validateFormThenProceed,
  };
}
