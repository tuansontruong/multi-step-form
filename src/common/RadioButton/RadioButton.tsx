import classNames from "classnames";

export interface IRadioButtonProps {
  isSelected: boolean;
  inputKey: string;
  register: any;
  prependIcon?: any;
}

export function RadioButton({
  isSelected,
  inputKey,
  register,
  prependIcon,
}: IRadioButtonProps) {
  return (
    <label
      className={classNames(
        "border-[1px] border-gray-light rounded-md p-4 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange",
        { "border-orange": isSelected }
      )}
    >
      <input
        {...register()}
        type="radio"
        value={inputKey}
        id={inputKey}
        className="hidden"
      />
      {prependIcon && (
        <div className=" w-9 h-9 rounded-full flex justify-center items-center bg-orange text-white">
          {prependIcon}
        </div>
      )}
      <div className="capitalize">{inputKey}</div>
    </label>
  );
}
