import classNames from "classnames";
import { Fragment } from "react";

import { ChallengeKeys } from "@models";

export interface IRadioButtonProps {
  label: ChallengeKeys;
  isParentChecked: boolean;
}

export function RadioButton({
  label,
  isParentChecked = false,
}: IRadioButtonProps) {
  return (
    <Fragment>
      <input
        type="checkbox"
        id={label}
        checked={isParentChecked}
        className="relative peer appearance-none w-5 h-5 border-2 border-gray rounded-md bg-white shrink-0
        checked:bg-orange checked:border-0 hover: cursor-pointer"
      />
      <label htmlFor={label} className=" peer uppercase">
        {label}
      </label>
      <svg
        className={classNames(
          "absolute w-5 h-5 hidden peer-checked:block p-1 pointer-events-none"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </Fragment>
  );
}