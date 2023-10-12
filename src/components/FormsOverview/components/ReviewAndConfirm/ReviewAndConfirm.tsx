import { ROUTES } from "@types";
import { ChallengePreference, PersonalInformation, SkillLevel } from "@models";

export interface IReviewAndConfirmProps {
  personalInformationData: PersonalInformation;
  skillLevelData: SkillLevel | undefined;
  challengePreferenceData: ChallengePreference;
}

export const ReviewAndConfirm = ({
  personalInformationData,
  skillLevelData,
  challengePreferenceData,
}: IReviewAndConfirmProps) => {
  if (!personalInformationData || !skillLevelData || !challengePreferenceData) {
    window.location.hash = ROUTES.PersonalInformation;
    return;
  }

  return (
    <div className=" md:min-w-[600px]">
      <h3 className="text-2xl font-extrabold">Review and Confirm</h3>
      <div className=" mt-2 text-gray">
        Please review your information to make sure everything is accurate.
      </div>
      <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-2">
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Full Name</div>
          <div>{personalInformationData.fullName}</div>
        </div>
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Email Address</div>
          <div>{personalInformationData.email}</div>
        </div>
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Phone Number</div>
          <div>{personalInformationData.phoneNumber}</div>
        </div>
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Portfolio/GitHub Link</div>
          <div>{personalInformationData.portfolioUrl}</div>
        </div>
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Skill Level</div>
          <div>{skillLevelData.skillLevel}</div>
        </div>
        <div className=" bg-gray-extra-light py-4 px-3 rounded-xl">
          <div className=" text-[#4B5563]">Challenge Preference</div>

          {challengePreferenceData.challenge?.map((challenge) => (
            <div>{challenge}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
