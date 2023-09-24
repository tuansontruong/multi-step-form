import { Fragment } from "react";
import classname from "classnames";

export interface IStepsProps {
  numberOfSteps: number;
  currentStep: number;
}

export function Steps({ numberOfSteps, currentStep }: IStepsProps) {
  return (
    <div className=" flex flex-row items-center justify-center gap-4">
      {Array.from({ length: numberOfSteps }, (_, index) => {
        const isStepActive = currentStep == index + 1;
        const isStepInactive = currentStep !== index + 1;
        const isNotLastStep = index !== numberOfSteps - 1;
        return (
          <Fragment key={index}>
            <div
              className={classname(
                "w-8 h-8 rounded-full flex justify-center items-center pb-1",
                { "bg-orange text-white": isStepActive },
                { "bg-gray-light text-black": isStepInactive }
              )}
            >
              {index + 1}
            </div>
            {isNotLastStep && (
              <div className=" bg-gray-light w-20 h-[5px] rounded-md"></div> //step seperator
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
