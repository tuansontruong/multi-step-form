import { InferType, mixed, object } from "yup";
import { Level, LevelKeys } from "@types";

export const skillLevelSchema = object({
  skillLevel: mixed<LevelKeys>().oneOf(Object.values(Level)),
});

export interface SkillLevel extends InferType<typeof skillLevelSchema> {}
