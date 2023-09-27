import { CTAs } from "../CTAs";
import { PersonalInformation } from "../PersonalInformation";
import { Seperator } from "../Seperator";
import { Steps } from "../Steps";

export function Form() {
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <Steps numberOfSteps={4} currentStep={1} />
        <Seperator />
        <PersonalInformation />
        <Seperator />
        <CTAs />
      </div>
    </div>
  );
}
