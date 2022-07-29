export type AnimationTimings = {
  easeOutCirc: string;
  easeInOut: string;
};

export const DEFAULT_ANIMATION_TIMINGS: AnimationTimings = {
  easeOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  easeInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
};

export const ANIMATION_CSS_VARS: Record<keyof AnimationTimings, string> = {
  easeOutCirc: "--ant-ease-out-circ",
  easeInOut: "--ant-ease-in-out",
};
