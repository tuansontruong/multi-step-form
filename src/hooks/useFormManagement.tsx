import { useRef, useState } from "react";
import { ROUTES_KEY } from "@types";
import { PersonalInformation, SkillLevel } from "@models";

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
  // ref for each form
  const personalInformationStepRef = useRef<HTMLFormElement>(null);
  const skillLevelStepRef = useRef<HTMLFormElement>(null);
  const challengePreferenceStepRef = useRef<HTMLFormElement>(null);

  // states of each form
  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      portfolioUrl: "",
    });

  const [skillLevelData, setSkillLevelData] = useState<SkillLevel>();

  const currentCTA = useRef<string>();

  const onValidateCurrentForm = (currentAction: string) => {
    if (currentHash === "#PersonalInfomation") {
      personalInformationStepRef.current?.submit();
    }
    if (currentHash === "#SkillLevel") {
      skillLevelStepRef.current?.submit();
    }
    if (currentHash === "#ChallengePreference") {
      challengePreferenceStepRef.current?.submit();
    }
    currentCTA.current = currentAction;
  };

  const proceedToNextCTA = () => {
    if (currentCTA.current === "next") {
      proceedToNextHash();
    } else if (currentCTA.current === "back") {
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
    proceedToNextCTA();
    currentCTA.current = undefined;
  };

  return {
    personalInformationStepRef,
    skillLevelStepRef,
    challengePreferenceStepRef,
    onSubmitGlobal,
    personalInformationData,
    skillLevelData,
    onValidateCurrentForm,
  };
}
