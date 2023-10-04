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

export function useSimpleHashRouter({
  currentHash,
}: {
  currentHash: ROUTES_KEY | undefined;
}) {
  const currentRoute = routeToComponentMapper[currentHash as ROUTES_KEY];

  return {
    currentRoute,
  };
}
