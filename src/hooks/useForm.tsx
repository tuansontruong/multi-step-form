import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm as useReactHookForm,
} from "react-hook-form";
import { User, userSchema } from "@models";

import { yupResolver } from "@hookform/resolvers/yup";

export interface IuseFormProps {}

export function useForm(): {
  register: UseFormRegister<User>;
  handleSubmit: UseFormHandleSubmit<User, undefined>;
  errors: FormState<User>["errors"];
  onSubmit: (data: User) => void;
} {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useReactHookForm<User>({ resolver: yupResolver(userSchema) });
  const onSubmit = (data: User) => console.log(data);
  console.log(watch("fullName")); // watch input value by passing the name of it

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
