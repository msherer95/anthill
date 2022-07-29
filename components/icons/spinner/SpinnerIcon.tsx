import { Icon, IconProps } from "../icon/Icon";
import SpinnerSvg from "./spinner.svg?component";

export type SpinnerIconProps = Omit<IconProps, "spin" | "icon">;

export const SpinnerIcon = (props: SpinnerIconProps) => {
  return <Icon icon={SpinnerSvg} spin {...props} />;
};
