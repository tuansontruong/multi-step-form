export const ROUTES = {
  PersonalInformation: "#PersonalInfomation",
  SkillLevel: "#SkillLevel",
  ChallengePreference: "#ChallengePreference",
} as const;

export type ROUTES_KEY = (typeof ROUTES)[keyof typeof ROUTES];
