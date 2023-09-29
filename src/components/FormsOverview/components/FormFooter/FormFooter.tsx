import { Button } from "@common";
import { Else, If, Then } from "react-if";

interface FormFooterProps {
  isFirstStep: boolean;
  proceedToNextStep: () => void;
  goBackToPrevStep: () => void;
  isLastStep: boolean;
}

export function FormFooter({
  isFirstStep,
  proceedToNextStep,
  goBackToPrevStep,
  isLastStep,
}: FormFooterProps) {
  return (
    <div>
      <If condition={!isFirstStep}>
        <div className="float-left">
          <Button variant="outlined" onClick={goBackToPrevStep}>
            Go Back
          </Button>
        </div>
      </If>
      <div className="float-right">
        <If condition={!isLastStep}>
          <Then>
            <Button variant="primary" onClick={proceedToNextStep}>
              Next Step
            </Button>
          </Then>
          <Else>
            <Button variant="primary">Submit</Button>
          </Else>
        </If>
      </div>
    </div>
  );
}
