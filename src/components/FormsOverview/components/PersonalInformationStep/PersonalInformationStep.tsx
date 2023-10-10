import { forwardRef, useImperativeHandle, useRef } from "react";
import classNames from "classnames";

import { PersonalInformation } from "@models";
import { useForm, FieldErrorMessage } from "@common";
import { personalInformationSchema } from "@schemas";

interface IPersonalInformationStep {
  onSubmitGlobal: (data: any) => void;
  defaultValues: PersonalInformation;
}

export const PersonalInformationStep = forwardRef(
  ({ onSubmitGlobal, defaultValues }: IPersonalInformationStep, ref) => {
    const { handleSubmit, onSubmit, register, errors } =
      useForm<PersonalInformation>(
        personalInformationSchema,
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
          <h3 className="text-2xl font-extrabold">Personal Information</h3>
          <div className=" mt-2 text-gray">
            Please provide your personal details so we can get to know you
            better
          </div>
          <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2">
            <div>
              <div className=" font-bold mb-2">Full Name</div>
              <div className="flex gap-1 flex-col">
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Shawn Mendes"
                  className={classNames(
                    "w-full border-[1px] font-extralight border-gray-light rounded-md p-2 hover:border-orange focus:outline-none",
                    {
                      "border-error": errors.fullName?.message,
                    }
                  )}
                />
                {errors.fullName?.message && (
                  <FieldErrorMessage message={errors.fullName.message} />
                )}
              </div>
            </div>
            <div>
              <div className=" font-bold mb-2">Email Address</div>
              <div className="flex gap-1 flex-col">
                <input
                  {...register("email")}
                  type="text"
                  placeholder="name@email.com"
                  className={classNames(
                    "w-full border-[1px] border-gray-light rounded-md p-2 hover:border-orange focus:outline-none",
                    {
                      "border-error": errors.email?.message,
                    }
                  )}
                />
                {errors.email?.message && (
                  <FieldErrorMessage message={errors.email.message} />
                )}
              </div>
            </div>
            <div>
              <div className=" font-bold mb-2">Phone Number</div>
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="+1 234 567 890"
                className="w-full border-[1px] border-gray-light rounded-md p-2 hover:border-orange focus:outline-none"
              />
            </div>
            <div>
              <div className=" font-bold mb-2">Portfolio / Github Link</div>
              <div className="flex gap-1 flex-col">
                <input
                  {...register("portfolioUrl")}
                  type="text"
                  placeholder="github.com/tuansontruong"
                  className={classNames(
                    "w-full border-[1px] font-extralight border-gray-light rounded-md p-2 hover:border-orange focus:outline-none",
                    {
                      "border-error": errors.portfolioUrl?.message,
                    }
                  )}
                />
                {errors.portfolioUrl?.message && (
                  <FieldErrorMessage message={errors.portfolioUrl.message} />
                )}
              </div>
            </div>
          </div>
        </div>
        <input type="submit" className="hidden" ref={submitRef} />
      </form>
    );
  }
);
