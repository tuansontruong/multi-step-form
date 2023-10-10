import { useRef, useState } from "react";

import { ROUTES_KEY } from "@types";
import { PersonalInformation, SkillLevel, ChallengePreference } from "@models";

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
  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      portfolioUrl: "",
    });
  const [skillLevelData, setSkillLevelData] = useState<SkillLevel>();
  const [challengePreferenceData, setChallengePreferenceData] =
    useState<ChallengePreference>({ challenge: [] });

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

  const onSubmitGlobal = (data: any) => {
    if (currentHash === "#PersonalInfomation") {
      setPersonalInformationData(data);
    }
    if (currentHash === "#SkillLevel") {
      setSkillLevelData(data);
    }
    if (currentHash === "#ChallengePreference") {
      setChallengePreferenceData(data);
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
