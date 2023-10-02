import { useEffect, useState } from "react";
import {
  ChallengePreferenceStep,
  PersonalInformationStep,
  SkillLevelStep,
} from "../components";

export const ROUTES = {
  PersonalInformation: "#PersonalInfomation",
  SkillLevel: "#SkillLevel",
  ChallengePreference: "#ChallengePreference",
} as const;

type ROUTES_KEY = (typeof ROUTES)[keyof typeof ROUTES];

const routeToComponentMapper = {
  [ROUTES.PersonalInformation]: PersonalInformationStep,
  [ROUTES.SkillLevel]: SkillLevelStep,
  [ROUTES.ChallengePreference]: ChallengePreferenceStep,
};

function useLocationHash(): ROUTES_KEY {
  const [hash, setHash] = useState<ROUTES_KEY>(ROUTES.PersonalInformation);
  function onHashChange() {
    setHash(window.location.hash as ROUTES_KEY);
  }
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("load", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("load", onHashChange);
    };
  }, []);
  return hash;
}

export function useSimpleHashRouter() {
  const hash = useLocationHash();
  // Exclude '#' when calculating hash.
  const currentRoute = routeToComponentMapper[hash as ROUTES_KEY];
  if (currentRoute) {
    return currentRoute;
  }
  return null;
}
