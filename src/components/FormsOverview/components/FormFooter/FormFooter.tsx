import { Button } from "@common";

export interface ICTAsProps {}

export function FormFooter() {
  return (
    <div className=" flex flex-row justify-between">
      <Button variant="outlined">Go Back</Button>
      <Button variant="primary">Next Step</Button>
    </div>
  );
}
