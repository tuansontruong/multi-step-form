import { Button } from "@common";

interface FormFooterProps {
  isFirstStep: boolean;
  proceedToNextStep: () => void;
  goBackToPrevStep: () => void;
}

export function FormFooter({
  isFirstStep,
  proceedToNextStep,
  goBackToPrevStep,
}: FormFooterProps) {
  return (
    <div>
      {!isFirstStep && (
        <div className="float-left">
          <Button variant="outlined" onClick={goBackToPrevStep}>
            Go Back
          </Button>
        </div>
      )}

      <div className="float-right">
        <Button variant="primary" onClick={proceedToNextStep}>
          Next Step
        </Button>
      </div>
    </div>
  );
}
