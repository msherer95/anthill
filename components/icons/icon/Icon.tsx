import { isNil } from "lodash";
import { JSX } from "solid-js";
import styles from "./Icon.module.scss";
import { Svg } from "./icon.types";

export type IconProps = {
  icon: Svg;
  spin?: boolean;
};

export const Icon = (props: IconProps) => {
  const classList = () => ({
    [styles.Icon]: true,
    [styles.spin]: !isNil(props.spin),
  });

  return (
    <span classList={classList()}>{props.icon as unknown as JSX.Element}</span>
  );
};
