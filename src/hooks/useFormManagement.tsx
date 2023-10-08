import { useRef, useState } from "react";
import { ROUTES_KEY } from "@types";
import { PersonalInformation } from "@models";

export interface IuseFormManagementProps {
  currentHash: ROUTES_KEY;
  proceedToNextHash: () => void;
}

export function useFormManagement({
  currentHash,
  proceedToNextHash,
}: IuseFormManagementProps) {
  // ref for each form
  const personalInformationStepRef = useRef<HTMLFormElement>(null);
  const skillLevelStepRef = useRef<HTMLFormElement>(null);
  const challengePreferenceStepRef = useRef<HTMLFormElement>(null);

  const onValidateCurrentForm = () => {
    if (currentHash === "#PersonalInfomation") {
      personalInformationStepRef.current?.submit();
    }
    if (currentHash === "#SkillLevel") {
      skillLevelStepRef.current?.submit();
    }
    if (currentHash === "#ChallengePreference") {
      challengePreferenceStepRef.current?.submit();
    }
  };

  const [personalInformationData, setPersonalInformationData] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      portfolioUrl: "",
    });
  const onSubmitGlobal = (data: PersonalInformation) => {
    console.log(data);
    setPersonalInformationData(data);
    proceedToNextHash();
  };

  return {
    personalInformationStepRef,
    skillLevelStepRef,
    challengePreferenceStepRef,
    onSubmitGlobal,
    personalInformationData,
    onValidateCurrentForm,
  };
}
