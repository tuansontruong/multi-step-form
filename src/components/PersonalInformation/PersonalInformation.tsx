export interface IPersonalInformationProps {}

export function PersonalInformation(props: IPersonalInformationProps) {
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Personal Information</h3>
      <div className=" mt-3 text-gray">
        Please provide your personal details so we can get to know you better
      </div>
      <div className=" mt-6 grid gap-6 grid-cols-2 grid-rows-2">
        <div>
          <div className=" font-bold mb-2">Full Name</div>
          <div>
            <input
              type="text"
              className="w-full border-[1px] border-gray-light rounded-md p-2 focus:border-orange focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className=" font-bold mb-2">Email Address</div>
          <input
            type="text"
            className="w-full border-[1px] border-gray-light rounded-md p-2 focus:border-orange focus:outline-none"
          />
        </div>
        <div>
          <div className=" font-bold mb-2">Phone Number</div>
          <input
            type="text"
            className="w-full border-[1px] border-gray-light rounded-md p-2 focus:border-orange focus:outline-none"
          />
        </div>
        <div>
          <div className=" font-bold mb-2">Portfolio / Github Link</div>
          <input
            type="text"
            className="w-full border-[1px] border-gray-light rounded-md p-2 focus:border-orange focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
