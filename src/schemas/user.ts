import { ChallengePreference } from "../models/Challenge";
import { PersonalInformation } from "../models/PersonalInformation";
import { SkillLevel } from "../models/SkillLevel";
import { challengePreferenceSchema } from "./challengePreference";
import { personalInformationSchema } from "./personalInformation";
import { skillLevelSchema } from "./skillLevel";

import { ObjectSchema } from "yup";

function merge(
  personalInformationSchema: ObjectSchema<PersonalInformation>,
  skillLevelSchemas: ObjectSchema<SkillLevel>,
  challengePreferenceSchema: ObjectSchema<ChallengePreference>
): ObjectSchema<SkillLevel & PersonalInformation & ChallengePreference> {
  return personalInformationSchema
    .concat(skillLevelSchemas)
    .concat(challengePreferenceSchema);
}

// this schema is the combination of all other forms
export const userSchema = merge(
  personalInformationSchema,
  skillLevelSchema,
  challengePreferenceSchema
);
