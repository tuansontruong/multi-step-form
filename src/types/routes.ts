export const ROUTES = {
  PersonalInformation: "#PersonalInfomation",
  SkillLevel: "#SkillLevel",
  ChallengePreference: "#ChallengePreference",
  ReviewAndConfirm: "#ReviewAndConfirm",
} as const;

export type ROUTES_KEY = (typeof ROUTES)[keyof typeof ROUTES];
