import { ROUTES, ROUTES_KEY } from "@types";

import {
  ChallengePreferenceStep,
  PersonalInformationStep,
  SkillLevelStep,
} from "../components/FormsOverview/components";

const routeToComponentMapper = {
  [ROUTES.PersonalInformation]: PersonalInformationStep,
  [ROUTES.SkillLevel]: SkillLevelStep,
  [ROUTES.ChallengePreference]: ChallengePreferenceStep,
};

interface IUseSimpleHashRouterProps {
  currentHash: ROUTES_KEY | undefined;
}

export function useSimpleHashRouter({
  currentHash,
}: IUseSimpleHashRouterProps) {
  const currentRoute = routeToComponentMapper[currentHash as ROUTES_KEY];
  return {
    currentRoute,
  };
}
