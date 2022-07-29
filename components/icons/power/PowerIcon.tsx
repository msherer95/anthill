import { Icon, IconProps } from "../icon/Icon";
import PowerSvg from "./power.svg?component";

export type PowerIconProps = Omit<IconProps, "spin" | "icon">;

export const PowerIcon = (props: PowerIconProps) => {
  return <Icon icon={PowerSvg} {...props} />;
};
