import { useEffect, useState } from "react";
import { ROUTES, ROUTES_KEY } from "../types/routes";

export const useLocationHash = () => {
  const [currentHash, setCurrentHash] = useState<ROUTES_KEY>(
    ROUTES.PersonalInformation
  );
  const onHashChange = () => {
    // If there is no hash, set the hash to the first step
    if (window.location.hash === "") {
      window.location.hash = ROUTES.PersonalInformation;
    }

    setCurrentHash(window.location.hash as ROUTES_KEY);
  };
  const orderedHashes = Object.values(ROUTES);

  const proceedToNextHash = () => {
    const currentStepIndex = orderedHashes.findIndex((step) => step === currentHash);
    const nextStepIndex = currentStepIndex + 1;
    const nextStep = orderedHashes[nextStepIndex];
    if (nextStep) {
      window.location.hash = nextStep;
    }
  };
  const goBackToPrevHash = () => {
    const currentStepIndex = orderedHashes.findIndex((step) => step === currentHash);
    const prevStepIndex = currentStepIndex - 1;
    const prevStep = orderedHashes[prevStepIndex];
    if (prevStep) {
      window.location.hash = prevStep;
    }
  };
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("load", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.addEventListener("load", onHashChange);
    };
  }, []);
  return { currentHash, proceedToNextHash, goBackToPrevHash };
};
