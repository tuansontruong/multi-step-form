import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";

import { PersonalInformation } from "./components";


export function FormOverview() {
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={4} currentStep={1} />
        <Separator />
        <PersonalInformation />
        <Separator />
        <FormFooter />
      </div>
    </div>
  );
}
