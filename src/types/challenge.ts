export const Challenge = {
  HTML: "html/css/js",
  ReactJS: "reactjs",
  AngularJS: "angularjs",
  VueJS: "vuejs",
};

export type ChallengeKeys = (typeof Challenge)[keyof typeof Challenge];
