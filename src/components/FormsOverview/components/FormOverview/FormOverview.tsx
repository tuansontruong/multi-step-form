import { Separator } from "@common";

import { FormSteps } from "../FormSteps";
import { PersonalInformationForm } from "../PersonalInformationForm";
import { FormFooter } from "../FormFooter";

export function FormOverview() {
  return (
    <div className="w-full max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={4} currentStep={2} />
        <Separator />
        <PersonalInformationForm />
        <Separator />
        <FormFooter />
      </div>
    </div>
  );
}
