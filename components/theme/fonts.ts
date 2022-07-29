export type Fonts = {
  fontFamily: string;
};

export const DEFAULT_FONTS = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
};

export const FONT_CSS_VARS: Record<keyof Fonts, string> = {
  fontFamily: "--ant-font-family",
};
