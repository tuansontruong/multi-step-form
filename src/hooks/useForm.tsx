import { yupResolver } from "@hookform/resolvers/yup";
import {
  FieldValues,
  FormState,
  Resolver,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm as useReactHookForm,
} from "react-hook-form";

export interface IuseFormProps {}

export function useForm<T extends FieldValues>(
  schema: any
): {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  errors: FormState<T>["errors"];
  onSubmit: (data: T) => void;
} {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<T>({
    resolver: yupResolver(schema) as unknown as Resolver<T, any> | undefined,
  });
  const onSubmit = (data: T) => console.log(data);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
