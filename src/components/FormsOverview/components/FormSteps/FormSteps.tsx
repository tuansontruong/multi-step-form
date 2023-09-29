import { Fragment } from "react";
import cn from "classnames";

export interface IStepsProps {
  numberOfSteps: number;
  currentStep: number;
}

export function FormSteps({ numberOfSteps, currentStep }: IStepsProps) {
  return (
    <div className=" flex flex-row items-center justify-center gap-0 md:gap-4">
      {Array.from({ length: numberOfSteps }, (_, index) => {
        // Determine if the current step is active or not
        const isStepActive = index < currentStep;

        // Determine if the separator should have a different color or not
        const shouldChangeSeparatorColor =
          index !== currentStep - 1 && isStepActive;

        // Determine if this is the last step or not
        const isNotLastStep = index !== numberOfSteps - 1;


        return (
          <Fragment key={index}>
            <div
              className={cn(
                "bg-gray-light text-black w-8 h-8 rounded-full flex justify-center items-center",
                { "bg-orange text-white": isStepActive }
              )}
            >
              {index + 1}
            </div>
            {isNotLastStep && (
              <div
                className={cn(" bg-gray-light w-20 h-[5px] rounded-md", {
                  "bg-orange": shouldChangeSeparatorColor,
                })}
              ></div> //step seperator
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
