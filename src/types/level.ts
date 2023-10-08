export const Level = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
  Expert: "expert",
} as const;

export type LevelKeys = (typeof Level)[keyof typeof Level];
