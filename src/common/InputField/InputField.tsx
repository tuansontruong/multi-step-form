import classNames from "classnames";

export interface IInputFieldProps {
  placeholder: string;
  isError: boolean;
  register: any;
}

export function InputField({
  placeholder,
  isError,
  register,
}: IInputFieldProps) {
  return (
    <input
      {...register()}
      type="text"
      placeholder={placeholder}
      className={classNames(
        "w-full border-[1px] font-extralight rounded-xl p-3 hover:border-orange focus:outline-none text-zinc-600",
        {
          "border-error": isError,
        },
        {
          "border-gray-light": !isError,
        }
      )}
    />
  );
}
