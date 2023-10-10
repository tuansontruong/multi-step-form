import { InferType } from "yup";
import { challengePreferenceSchema } from "@schemas";

export interface ChallengePreference
  extends InferType<typeof challengePreferenceSchema> {}
