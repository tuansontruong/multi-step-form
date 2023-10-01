export interface IPersonalInformationProps {}

export function PersonalInformationStep() {
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Personal Information</h3>
      <div className=" mt-2 text-gray">
        Please provide your personal details so we can get to know you better
      </div>
      <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2">
        <div>
          <div className=" font-bold mb-2">Full Name</div>
          <div>
            <input
              type="text"
              placeholder="Shawn Mendes"
              className="w-full border-[1px] font-extralight border-gray-light rounded-md p-2 hover:border-orange focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className=" font-bold mb-2">Email Address</div>
          <input
            type="text"
            placeholder="name@email.com"
            className="w-full border-[1px] border-gray-light rounded-md p-2 hover:border-orange focus:outline-none"
          />
        </div>
        <div>
          <div className=" font-bold mb-2">Phone Number</div>
          <input
            type="text"
            placeholder="+1 234 567 890"
            className="w-full border-[1px] border-gray-light rounded-md p-2 hover:border-orange focus:outline-none"
          />
        </div>
        <div>
          <div className=" font-bold mb-2">Portfolio / Github Link</div>
          <input
            type="text"
            placeholder="github.com/tuansontruong"
            className="w-full border-[1px] border-gray-light rounded-md p-2 hover:border-orange focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
