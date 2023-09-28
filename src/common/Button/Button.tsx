export interface IButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outlined";
}

export function Button(props: IButtonProps) {
  const { variant = "primary", children } = props;

  if (variant === "primary") {
    return (
      <button className="bg-orange border-[1px] border-white text-white rounded-md font-extralight px-4 py-2 hover:bg-[#e65c2c]">
        {children}
      </button>
    );
  }
  return (
    <button className=" bg-white border-[1px] border-orange text-orange rounded-md font-extralight px-4 py-2 hover:bg-slate-100">
      {children}
    </button>
  );
}
