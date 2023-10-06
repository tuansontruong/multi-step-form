import { Separator } from "@common";
import { useSimpleHashRouter, useLocationHash, useForm } from "@hooks";

import { FormSteps } from "../FormSteps";
import { FormFooter } from "../FormFooter";
import { useEffect, useRef } from "react";

const numberOfSteps = 4;

export function FormOverview() {
  const { currentHash, proceedToNextHash, goBackToPrevHash } =
    useLocationHash();
  const { currentRoute: CurrentRoute } = useSimpleHashRouter({ currentHash });

  const { register, handleSubmit, errors, onSubmit } = useForm();

  const submitRef = useRef<HTMLInputElement>(null);

  const validateCurrentForm = () => {
    submitRef.current?.click();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log(errors);
    } else proceedToNextHash();
  }, [errors]);

  return (
    <div className="w-[90%] md:w-full m-auto max-w-3xl bg-white drop-shadow-lg rounded-md p-4">
      <div className="flex flex-col gap-6">
        <FormSteps numberOfSteps={numberOfSteps} currentRoute={currentHash} />

        <Separator />

        <form onSubmit={handleSubmit(onSubmit)}>
          {CurrentRoute && <CurrentRoute register={register} errors={errors} />}
          <input type="submit" className="hidden" ref={submitRef} />
        </form>

        <Separator />

        <FormFooter
          proceedToNextStep={validateCurrentForm}
          goBackToPrevStep={goBackToPrevHash}
          isFirstStep={currentHash === "#PersonalInfomation"}
          isLastStep={!currentHash}
        />
      </div>
    </div>
  );
}
