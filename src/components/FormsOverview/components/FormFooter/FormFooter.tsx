import { Button } from "@common";

interface FormFooterProps {
  isFirstStep: boolean;
}

export function FormFooter({ isFirstStep }: FormFooterProps) {
  return (
    <div>
      {!isFirstStep && (
        <div className="float-left">
          <Button variant="outlined">Go Back</Button>
        </div>
      )}

      <div className="float-right">
        <Button variant="primary">Next Step</Button>
      </div>
    </div>
  );
}
