import { Separator } from "@common";
import { useSimpleHashRouter, useLocationHash, useForm } from "@hooks";


import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";

const numberOfSteps = 4;

export function FormOverview() {
  const { currentHash, proceedToNextHash, goBackToPrevHash } =
    useLocationHash();
  const { currentRoute: CurrentRoute } = useSimpleHashRouter({ currentHash });

  const { register, handleSubmit, errors, onSubmit } = useForm();

  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentRoute={currentHash} />

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          {CurrentRoute && <CurrentRoute register={register} errors={errors} />}
          <input type="submit" />
        </form>

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
