import classNames from "classnames";
import { ReactSVG } from "react-svg";

export interface IButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outlined";
  onClick?: React.MouseEventHandler;
  isLoading?: boolean;
}

export function Button(props: IButtonProps) {
  const { variant = "primary", children, isLoading, ...rest } = props;

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className={classNames(
          "flex justify-center items-center gap-2 bg-orange border-[1px] border-white text-white rounded-xl font-extralight px-4 py-2 hover:bg-[#e65c2c]",
          { isLoading: "transition ease-in duration-200" }
        )}
      >
        {children}
        {isLoading && <ReactSVG src="loadingIcon.svg" />}
      </button>
    );
  }
  return (
    <button
      {...rest}
      className={classNames(
        " bg-white border-[1px] border-orange text-orange rounded-xl font-extralight px-4 py-2 hover:bg-slate-100",
        { isLoading: "transition ease-in duration-200" }
      )}
    >
      {children}
    </button>
  );
}
