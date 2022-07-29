export type Colors = {
  primaryColor: string;
  primaryColorHover: string;
  primaryColorActive: string;
  primaryColorOutline: string;
  defaultColor: string;
};

export const DEFAULT_COLORS: Colors = {
  primaryColor: "#1890ff",
  primaryColorHover: "#40a9ff",
  primaryColorActive: "#096dd9",
  primaryColorOutline: "rgba(24, 144, 255, .2)",
  defaultColor: "#d9d9d9",
};

export const COLOR_CSS_VARS: Record<keyof Colors, string> = {
  primaryColor: "--ant-primary-color",
  primaryColorHover: "--ant-primary-color-hover",
  primaryColorActive: "--ant-primary-color-active",
  primaryColorOutline: "--ant-primary-color-outline",
  defaultColor: "--ant-default-color",
};
