import { forwardRef, useImperativeHandle, useRef } from "react";

import { Level } from "@types";
import { SkillLevel } from "@models";
import { skillLevelSchema } from "@schemas";
import { useForm, FieldErrorMessage, RadioButton } from "@common";

export interface ISkillLevelProps {
  onSubmitGlobal: (data: any) => void;
  defaultValues: SkillLevel | undefined;
}

export const SkillLevelStep = forwardRef(
  ({ onSubmitGlobal, defaultValues }: ISkillLevelProps, ref) => {
    const { handleSubmit, onSubmit, register, errors, watch } =
      useForm<SkillLevel>(skillLevelSchema, onSubmitGlobal, defaultValues);

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
          <h3 className="text-2xl font-extrabold">Skill Level</h3>
          <div className=" mt-2 text-gray">
            Please tell us about your skill level in frontend development
          </div>
          <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2">
            <RadioButton
              isSelected={watch("skillLevel") == Level.Beginner}
              inputKey={Level.Beginner}
              register={() => register("skillLevel")}
              prependIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              }
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Intermediate}
              inputKey={Level.Intermediate}
              register={() => register("skillLevel")}
              prependIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              }
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Advanced}
              inputKey={Level.Advanced}
              register={() => register("skillLevel")}
              prependIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Expert}
              inputKey={Level.Expert}
              register={() => register("skillLevel")}
              prependIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className="mt-2">
          {errors.skillLevel?.message && (
            <FieldErrorMessage message={errors.skillLevel.message} />
          )}
        </div>
        <input type="submit" className="hidden" ref={submitRef} />
      </form>
    );
  }
);
