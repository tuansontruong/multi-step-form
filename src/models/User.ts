import { object, InferType, mixed } from "yup";
import { Challenge, ChallengeKeys, Level, LevelKeys } from "@types";

// export const userSchema = object({
//   fullName: string().required(),
//   email: string().email().required(),
//   phoneNumber: string().required(),
//   portfolioUrl: string().url().required(),

//   skillLevel: mixed<LevelKeys>().oneOf(Object.values(Level)),
//   challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge)),
// });

// export interface User extends InferType<typeof userSchema> {}
