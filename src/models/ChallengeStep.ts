import { InferType, mixed, object } from "yup";
import { Challenge, ChallengeKeys } from "@types";

export const challengeSchema = object({
  challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge)),
});

export interface Challenge extends InferType<typeof challengeSchema> {}
