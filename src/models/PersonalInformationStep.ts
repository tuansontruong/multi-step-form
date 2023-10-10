import { InferType } from "yup";
import { personalInformationSchema } from "@schemas";

export interface PersonalInformation
  extends InferType<typeof personalInformationSchema> {}
