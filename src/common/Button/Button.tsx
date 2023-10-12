import classNames from "classnames";

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
          "flex justify-center items-center gap-2 bg-orange border-[1px] border-white text-white rounded-xl font-extralight px-4 py-2 hover:bg-[#e65c2c] transition ease-in duration-200"
        )}
      >
        {children}
        {isLoading && (
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
        )}
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
