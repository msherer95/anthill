import {
  Component,
  createContext,
  createRenderEffect,
  JSX,
  useContext,
} from "solid-js";
import "../reset.scss";
import {
  AnimationTimings,
  ANIMATION_CSS_VARS,
  DEFAULT_ANIMATION_TIMINGS,
} from "./animation";
import { Colors, COLOR_CSS_VARS, DEFAULT_COLORS } from "./colors";
import { DEFAULT_FONTS, Fonts, FONT_CSS_VARS } from "./fonts";
import { DEFAULT_WAVE_PARAMS, Wave, WAVE_CSS_VARS } from "./wave";

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  wave: Wave;
  animationTimings: AnimationTimings;
};

const DEFAULT_THEME: Theme = {
  colors: DEFAULT_COLORS,
  fonts: DEFAULT_FONTS,
  wave: DEFAULT_WAVE_PARAMS,
  animationTimings: DEFAULT_ANIMATION_TIMINGS,
};

const ALL_CSS_VARS = {
  ...COLOR_CSS_VARS,
  ...FONT_CSS_VARS,
  ...WAVE_CSS_VARS,
  ...ANIMATION_CSS_VARS,
};

export const ThemeContext = createContext<Theme>(DEFAULT_THEME);
export const ThemeProvider: Component<{
  value: Theme;
  children: JSX.Element;
}> = (props) => {
  createRenderEffect(() => {
    const root = document.documentElement;
    const allVarValues = {
      ...props.value.colors,
      ...props.value.fonts,
      ...props.value.wave,
      ...props.value.animationTimings,
    };
    Object.entries(ALL_CSS_VARS).forEach(([varKey, cssVariable]) => {
      const varValue = allVarValues[varKey as keyof typeof ALL_CSS_VARS];
      root.style.setProperty(cssVariable, varValue);
    });
  });

  return <ThemeContext.Provider {...props} />;
};

export const DefaultThemeProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  return <ThemeProvider value={DEFAULT_THEME}>{props.children}</ThemeProvider>;
};

export const useTheme = () => useContext(ThemeContext);
