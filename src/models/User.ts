import { object, string, InferType, mixed } from 'yup';

export const Level = {
    Beginner: 'beginner',
    Intermediate: 'intermediate',
    Advanced: 'advanced',
    Expert: 'expert',
} as const

export const Challenge = {
    HTML: 'html/css/js',
    ReactJS: 'reactjs',
    AngularJS: 'angularjs',
    VueJS: 'vuejs'
}

type LevelKeys = typeof Level[keyof typeof Level];
type ChallengeKeys = typeof Challenge[keyof typeof Challenge];


export const userSchema = object({
    fullName: string().required(),
    email: string().email().required(),
    phoneNumber: string().required(),
    portfolioUrl: string().url().required(),

    skillLevel: mixed<LevelKeys>().oneOf(Object.values(Level)),
    challenge: mixed<ChallengeKeys>().oneOf(Object.values(Challenge))

});

export interface User extends InferType<typeof userSchema> {}