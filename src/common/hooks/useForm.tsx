import { yupResolver } from "@hookform/resolvers/yup";
import {
  DefaultValues,
  FieldValues,
  FormState,
  Resolver,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm as useReactHookForm,
} from "react-hook-form";

export interface IuseFormProps {}

export function useForm<T extends FieldValues>(
  schema: any,
  onSubmitGlobal: (data: T) => void,
  defaultValues: DefaultValues<T> | undefined
): {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  errors: FormState<T>["errors"];
  onSubmit: (data: T) => void;
  getValues: () => T;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
} {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useReactHookForm<T>({
    resolver: yupResolver(schema) as unknown as Resolver<T, any> | undefined,
    defaultValues: defaultValues,
  });

  // submit to global handler when validation succeed
  const onSubmit = (data: T) => {
    onSubmitGlobal(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    getValues,
    setValue,
    watch,
  };
}
