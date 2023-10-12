import { Button } from "@common";
import { Else, If, Then } from "react-if";

interface FormFooterProps {
  isFirstStep: boolean;
  proceedToNextStep: () => void;
  goBackToPrevStep: () => void;
  isLastStep: boolean;
  postUserData: () => void;
  isProccessing?: boolean;
}

export function FormFooter({
  isFirstStep,
  proceedToNextStep,
  goBackToPrevStep,
  isLastStep,
  postUserData,
  isProccessing,
}: FormFooterProps) {
  return (
    <div>
      <If condition={!isFirstStep}>
        <Then>
          <div className="float-left">
            <Button variant="outlined" onClick={goBackToPrevStep}>
              Go Back
            </Button>
          </div>
        </Then>
      </If>
      <div className="float-right">
        <If condition={!isLastStep}>
          <Then>
            <Button variant="primary" onClick={proceedToNextStep}>
              Next Step
            </Button>
          </Then>
          <Else>
            <Button
              variant="primary"
              onClick={postUserData}
              isLoading={isProccessing}
            >
              Submit
            </Button>
          </Else>
        </If>
      </div>
    </div>
  );
}
