import { ReactSVG } from "react-svg";

export interface IToastMessageProps {
  message: string;
}

export function ToastMessage({ message }: IToastMessageProps) {
  return (
    <div className=" animate-bounce flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
      <div className="text-red-500 rounded-full bg-white mr-3">
        <ReactSVG src="crossMark.svg" />
      </div>

      <div className="text-white">{message}</div>
    </div>
  );
}
