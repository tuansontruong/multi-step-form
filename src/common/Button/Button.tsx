export interface IButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outlined";
  onClick?: React.MouseEventHandler;
}

export function Button(props: IButtonProps) {
  const { variant = "primary", children, ...rest } = props;

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className="bg-orange border-[1px] border-white text-white rounded-md font-extralight px-4 py-2 hover:bg-[#e65c2c]"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      {...rest}
      className=" bg-white border-[1px] border-orange text-orange rounded-md font-extralight px-4 py-2 hover:bg-slate-100"
    >
      {children}
    </button>
  );
}
