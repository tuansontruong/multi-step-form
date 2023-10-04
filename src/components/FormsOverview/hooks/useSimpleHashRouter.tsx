import {
  ChallengePreferenceStep,
  PersonalInformationStep,
  SkillLevelStep,
} from "../components";
import { ROUTES, ROUTES_KEY } from "../types/routes";

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
