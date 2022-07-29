import { DEFAULT_ANIMATION_TIMINGS } from "./animation";
export type Wave = {
  fadeEffectTiming: string;
  fadeEffectDuration: string;
  waveEffectTiming: string;
  waveEffectDuration: string;
  width: string;
};

export const DEFAULT_WAVE_PARAMS: Wave = {
  fadeEffectTiming: DEFAULT_ANIMATION_TIMINGS.easeOutCirc,
  fadeEffectDuration: "2s",
  waveEffectTiming: DEFAULT_ANIMATION_TIMINGS.easeOutCirc,
  waveEffectDuration: "400ms",
  width: "6px",
};

export const WAVE_CSS_VARS: Record<keyof Wave, string> = {
  fadeEffectTiming: "--ant-wave-fade-effect-timing",
  fadeEffectDuration: "--ant-wave-fade-effect-duration",
  waveEffectTiming: "--ant-wave-wave-effect-timing",
  waveEffectDuration: "--ant-wave-wave-effect-duration",
  width: "--ant-wave-width",
};
