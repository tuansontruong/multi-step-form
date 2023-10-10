import { InferType } from "yup";
import { skillLevelSchema } from "@schemas";

export interface SkillLevel extends InferType<typeof skillLevelSchema> {}
