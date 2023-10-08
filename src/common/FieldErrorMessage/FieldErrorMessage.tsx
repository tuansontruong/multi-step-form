export interface IFieldErrorMessageProps {
  message: string;
}

export function FieldErrorMessage({ message }: IFieldErrorMessageProps) {
  return (
    <div className=" text-error flex flex-row gap-1 items-center text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>

      <p>{message}</p>
    </div>
  );
}
