import { forwardRef, useImperativeHandle, useRef } from "react";

import { Checkbox, FieldErrorMessage, useForm } from "@common";
import { ChallengePreference, challengePreferenceSchema } from "@models";
import { Challenge } from "@types";

export interface IChallengePreferenceStepProps {
  onSubmitGlobal: (data: any) => void;
  defaultValues: ChallengePreference;
}

export const ChallengePreferenceStep = forwardRef(
  ({ onSubmitGlobal, defaultValues }: IChallengePreferenceStepProps, ref) => {
    const { handleSubmit, onSubmit, register, errors, watch } =
      useForm<ChallengePreference>(
        challengePreferenceSchema,
        onSubmitGlobal,
        defaultValues
      );

    const submitRef = useRef<HTMLInputElement>(null);

    // expose submit function to parent component
    useImperativeHandle(
      ref,
      () => ({
        submit: () => {
          submitRef.current?.click();
        },
      }),
      []
    );

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" md:min-w-[600px]">
          <h3 className="text-2xl font-extrabold">Challenge Preference</h3>
          <div className=" mt-2 text-gray">
            Please tell us which frontend challenges you would like to
            participate in.
          </div>
          <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2">
            <Checkbox
              inputKey={Challenge.HTML}
              isSelected={watch("challenge")?.includes(Challenge.HTML)}
              register={() => register("challenge")}
            />
            <Checkbox
              inputKey={Challenge.ReactJS}
              isSelected={watch("challenge")?.includes(Challenge.ReactJS)}
              register={() => register("challenge")}
            />
            <Checkbox
              inputKey={Challenge.AngularJS}
              isSelected={watch("challenge")?.includes(Challenge.AngularJS)}
              register={() => register("challenge")}
            />
            <Checkbox
              inputKey={Challenge.VueJS}
              isSelected={watch("challenge")?.includes(Challenge.VueJS)}
              register={() => register("challenge")}
            />
          </div>
        </div>
        <div className="mt-2">
          {errors.challenge?.message && (
            <FieldErrorMessage message={errors.challenge.message} />
          )}
        </div>
        <input type="submit" className="hidden" ref={submitRef} />
      </form>
    );
  }
);
