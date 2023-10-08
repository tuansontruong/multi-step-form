import { InferType, object, string } from "yup";

export const personalInformationSchema = object({
  fullName: string().required(),
  email: string().email().required(),
  phoneNumber: string().required(),
  portfolioUrl: string().url().required(),
});

export interface PersonalInformation
  extends InferType<typeof personalInformationSchema> {}
