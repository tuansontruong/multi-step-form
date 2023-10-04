import { Separator } from "@common";
import { useSimpleHashRouter, useLocationHash } from "@hooks";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";


const numberOfSteps = 4;

export function FormOverview() {
  const { currentHash, proceedToNextHash, goBackToPrevHash } =
    useLocationHash();
  const { currentRoute: CurrentRoute } = useSimpleHashRouter({ currentHash });
  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentRoute={currentHash} />

        <Separator />

        {CurrentRoute && <CurrentRoute />}

        <Separator />

        <FormFooter
          proceedToNextStep={proceedToNextHash}
          goBackToPrevStep={goBackToPrevHash}
          isFirstStep={currentHash === "#PersonalInfomation"}
          isLastStep={!currentHash}
        />
      </div>
    </div>
  );
}
