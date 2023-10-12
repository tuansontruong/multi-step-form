import { InferType } from "yup";
import { userSchema } from "@schemas";
import { LevelKeys } from "@types";

export interface UserBaseModel extends InferType<typeof userSchema> {
  toAPIData?: () => Record<string, unknown>;
}

export class UserModel implements UserBaseModel {
  fullName: string;
  email: string;
  phoneNumber: string | undefined = "";
  portfolioUrl: string | undefined = "";
  skillLevel: LevelKeys | null = "beginner";
  challenge: (string | undefined)[] | undefined = [];

  constructor(user: UserBaseModel) {
    this.fullName = user.fullName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.portfolioUrl = user.portfolioUrl;
    this.skillLevel = user.skillLevel;
    this.challenge = user.challenge;
  }

  // convert to camel case object to send to api
  toAPIData() {
    return {
      full_name: this.fullName,
      email: this.email,
      phone_number: this.phoneNumber,
      portfolio_url: this.portfolioUrl,
      skill_level: this.skillLevel,
      challenge: this.challenge,
    };
  }
}
