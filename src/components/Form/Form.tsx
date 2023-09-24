import { Steps } from "../Steps";

export function Form() {
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <Steps numberOfSteps={4} currentStep={2} />
        <div className=" bg-gray-light w-full h-[0.6px] rounded-md"></div>
      </div>
    </div>
  );
}
