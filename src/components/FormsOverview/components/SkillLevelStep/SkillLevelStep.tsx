import { forwardRef, useImperativeHandle, useRef } from "react";
import { ReactSVG } from "react-svg";

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
              prependIcon={<ReactSVG src="beginner.svg" />}
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Intermediate}
              inputKey={Level.Intermediate}
              register={() => register("skillLevel")}
              prependIcon={<ReactSVG src="intermediate.svg" />}
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Advanced}
              inputKey={Level.Advanced}
              register={() => register("skillLevel")}
              prependIcon={<ReactSVG src="advanced.svg" />}
            />
            <RadioButton
              isSelected={watch("skillLevel") == Level.Expert}
              inputKey={Level.Expert}
              register={() => register("skillLevel")}
              prependIcon={<ReactSVG src="expert.svg" />}
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
