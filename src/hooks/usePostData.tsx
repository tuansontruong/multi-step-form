import { useState } from "react";
import {
  PersonalInformation,
  SkillLevel,
  ChallengePreference,
  UserModel,
  UserBaseModel,
} from "@models";
import { ROUTES } from "@types";

interface IusePostDataProps {
  personalInformationData: PersonalInformation;
  skillLevelData: SkillLevel | undefined;
  challengePreferenceData: ChallengePreference;
}

export function usePostData({
  personalInformationData,
  skillLevelData,
  challengePreferenceData,
}: IusePostDataProps) {
  const [isProccessing, setIsProccessing] = useState(false);
  const postData = () => {
    setIsProccessing(true);

    const user = new UserModel({
      ...personalInformationData,
      ...skillLevelData,
      ...challengePreferenceData,
    } as UserBaseModel);

    const fetchApi = new Promise((resolve) => {
      setTimeout(() => resolve("done"), 2000);
    });

    fetchApi
      .then(() => {
        console.log("post succeed", user.toAPIData());
        window.location.hash = ROUTES.Success;
      })
      .finally(() => {
        setIsProccessing(false);
      });
  };

  return {
    isProccessing,
    postData,
  };
}
