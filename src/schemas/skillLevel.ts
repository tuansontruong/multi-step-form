import { mixed, object } from "yup";

import { Level, LevelKeys } from "@types";

export const skillLevelSchema = object({
  skillLevel: mixed<LevelKeys>()
    .oneOf(Object.values(Level))
    .required("Please choose one of the skill levels above!"),
});
