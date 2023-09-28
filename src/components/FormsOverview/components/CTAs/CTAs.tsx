export interface ICTAsProps {}

export function CTAs() {
  return (
    <div className=" flex flex-row justify-between">
      <button className=" bg-white border-[1px] border-orange text-orange rounded-md font-extralight px-4 py-2 hover:bg-slate-100">
        Go Back
      </button>
      <button className="bg-orange border-[1px] border-white text-white rounded-md font-extralight px-4 py-2 hover:bg-[#e65c2c]">
        Next Step
      </button>
    </div>
  );
}
