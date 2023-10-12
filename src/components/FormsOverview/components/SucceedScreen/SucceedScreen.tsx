import { ReactSVG } from "react-svg";
import { ROUTES } from "@types";

interface ISucceedScreenProps {
  isAllFormsValidated: boolean;
}

export function SucceedScreen({ isAllFormsValidated }: ISucceedScreenProps) {
  if (!isAllFormsValidated) {
    window.location.hash = ROUTES.PersonalInformation;
    return;
  }
  return (
    <div className="flex justify-center flex-col items-center gap-6 px-4 py-8 md:px-14 md:py-7">
      <ReactSVG src="checkMark.svg" />
      <div className=" flex justify-center flex-col items-center gap-4 text-center">
        <h2 className=" font-semibold text-2xl">Congratulations! 🎉</h2>
        <h4 className=" font-normal text-sm text-gray">
          Your profile has been created and you are now ready to start
          participating in challenges that match your interests and coding
          experience level.
        </h4>
      </div>
    </div>
  );
}
