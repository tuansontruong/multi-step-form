import classNames from "classnames";
export interface ICheckboxProps {
  inputKey: string;
  isSelected: boolean | undefined;
  register: any;
}

export function Checkbox({ inputKey, isSelected, register }: ICheckboxProps) {
  return (
    <label
      className={classNames(
        "border-[1px] border-gray-light rounded-xl p-5 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange",
        {
          "border-orange": isSelected,
        }
      )}
    >
      <input
        {...register()}
        type="checkbox"
        id={inputKey}
        value={inputKey}
        className="relative peer appearance-none w-5 h-5 border-2 border-gray rounded-md bg-white shrink-0
        checked:bg-orange checked:border-0 hover: cursor-pointer"
      />
      <label htmlFor={inputKey} className=" peer capitalize cursor-pointer">
        {inputKey}
      </label>
      <svg
        className={classNames(
          "absolute w-5 h-5 hidden peer-checked:block p-1 pointer-events-none"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </label>
  );
}
