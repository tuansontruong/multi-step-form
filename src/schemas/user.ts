import { ChallengePreference } from "../models/Challenge";
import { PersonalInformation } from "../models/PersonalInformation";
import { SkillLevel } from "../models/SkillLevel";
import { challengePreferenceSchema } from "./challengePreference";
import { personalInformationSchema } from "./personalInformation";
import { skillLevelSchema } from "./skillLevel";

import { ObjectSchema } from "yup";

function merge(
  skillLevelSchemas: ObjectSchema<SkillLevel>,
  personalInformationSchema: ObjectSchema<PersonalInformation>,
  challengePreferenceSchema: ObjectSchema<ChallengePreference>
): ObjectSchema<SkillLevel & PersonalInformation & ChallengePreference> {
  return skillLevelSchemas
    .concat(personalInformationSchema)
    .concat(challengePreferenceSchema);
}

export const userSchema = merge(
  skillLevelSchema,
  personalInformationSchema,
  challengePreferenceSchema
);
