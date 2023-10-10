import { array, object, string } from "yup";
import { Challenge } from "@types";

export const challengePreferenceSchema = object({
  challenge: array()
    .of(string().oneOf(Object.values(Challenge)))
    .min(1, "Please select at least one of the challenges preference above!"),
});
