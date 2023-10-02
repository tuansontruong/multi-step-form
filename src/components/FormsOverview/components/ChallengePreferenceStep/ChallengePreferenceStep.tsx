import { RadioButton } from "@common";
import { Challenge, ChallengeKeys } from "@models";
import classNames from "classnames";
import { useState } from "react";

export interface IChallengePreferenceStepProps {}

export function ChallengePreferenceStep() {
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeKeys>();
  const toggleSetChallenge = (challenge: ChallengeKeys) => {
    if (selectedChallenge) {
      setSelectedChallenge(undefined);
    } else {
      setSelectedChallenge(challenge);
    }
  };
  return (
    <div>
      <h3 className="text-2xl font-extrabold">Challenge Preference</h3>
      <div className=" mt-2 text-gray">
        Please tell us which frontend challenges you would like to participate
        in.
      </div>
      <div className=" mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2">
        <div
          className={classNames(
            "border-[1px] border-gray-light rounded-md p-4 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange"
          )}
          onClick={() => toggleSetChallenge(Challenge.HTML)}
        >
          <RadioButton
            label={Challenge.HTML}
            isParentChecked={selectedChallenge === Challenge.HTML}
          />
        </div>
        <div
          className={classNames(
            "border-[1px] border-gray-light rounded-md p-4 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange"
          )}
          onClick={() => toggleSetChallenge(Challenge.ReactJS)}
        >
          <RadioButton
            label={Challenge.ReactJS}
            isParentChecked={selectedChallenge === Challenge.ReactJS}
          />
        </div>
        <div
          className={classNames(
            "border-[1px] border-gray-light rounded-md p-4 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange"
          )}
          onClick={() => toggleSetChallenge(Challenge.AngularJS)}
        >
          <RadioButton
            label={Challenge.AngularJS}
            isParentChecked={selectedChallenge === Challenge.AngularJS}
          />
        </div>
        <div
          className={classNames(
            "border-[1px] border-gray-light rounded-md p-4 flex flex-row items-center gap-4 hover:cursor-pointer hover:border-orange"
          )}
          onClick={() => toggleSetChallenge(Challenge.VueJS)}
        >
          <RadioButton
            label={Challenge.VueJS}
            isParentChecked={selectedChallenge === Challenge.VueJS}
          />
        </div>
      </div>
    </div>
  );
}
