import { InferType, mixed, object } from "yup";
import { Challenge, ChallengeKeys } from "@types";

export const challengePreferenceSchema = object({
  challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge)),
});

export interface ChallengePreference
  extends InferType<typeof challengePreferenceSchema> {}
