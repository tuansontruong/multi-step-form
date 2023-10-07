import { object, string, InferType, mixed } from "yup";

export const Level = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
  Expert: "expert",
} as const;

export const Challenge = {
  HTML: "html/css/js",
  ReactJS: "reactjs",
  AngularJS: "angularjs",
  VueJS: "vuejs",
};

export type LevelKeys = (typeof Level)[keyof typeof Level];
export type ChallengeKeys = (typeof Challenge)[keyof typeof Challenge];

// export const userSchema = object({
//   fullName: string().required(),
//   email: string().email().required(),
//   phoneNumber: string().required(),
//   portfolioUrl: string().url().required(),

//   skillLevel: mixed<LevelKeys>().oneOf(Object.values(Level)),
//   challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge)),
// });

// export interface User extends InferType<typeof userSchema> {}

export const personalInformationSchema = object({
  fullName: string().required(),
  email: string().email().required(),
  phoneNumber: string().required(),
  portfolioUrl: string().url().required(),
});

export interface PersonalInformation
  extends InferType<typeof personalInformationSchema> {}

export const skillLevelSchema = object({
  skillLevel: mixed<LevelKeys>().oneOf(Object.values(Level)),
});

export interface SkillLevel extends InferType<typeof skillLevelSchema> {}

export const challengeSchema = object({
  challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge)),
});

export interface Challenge extends InferType<typeof challengeSchema> {}
