import { InferType } from "yup";
import { userSchema } from "../schemas";

export interface User extends InferType<typeof userSchema> {}
