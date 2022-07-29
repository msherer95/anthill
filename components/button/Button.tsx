import { isNil } from "lodash";
import { Component, JSX, mergeProps, splitProps } from "solid-js";
import { StandardComponentProps as NativeComponentProps } from "../component.types";
import { SpinnerIcon } from "../icons/spinner/SpinnerIcon";
import { useTheme } from "../theme/ThemeContext";
import { Wave } from "../wave/Wave";
import styles from "./Button.module.scss";

export type ButtonProps = NativeComponentProps<HTMLButtonElement> & {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "large" | "default" | "small";
  shape?: "default" | "circle" | "round";
  loading?: boolean;
  ghost?: boolean;
  block?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  children?: string | JSX.Element;
  disableWave?: boolean;
  iconGap?: number;
};

const DEFAULT_BUTTON_PROPS: Partial<ButtonProps> = {
  type: "primary",
  size: "default",
  shape: "default",
  loading: false,
  ghost: false,
  block: false,
  disabled: false,
  classList: {},
  class: "",
  iconGap: 8,
};

const LOCAL_BUTTON_PROPS: Partial<keyof ButtonProps>[] = [
  "children",
  "class",
  "type",
  "size",
  "shape",
  "disableWave",
  "loading",
  "iconGap",
  "icon",
  "block",
  "ghost",
];

export const Button: Component<ButtonProps> = (props) => {
  const theme = useTheme();
  const propsWithDefaults = mergeProps(DEFAULT_BUTTON_PROPS, props);
  const [localProps, otherProps] = splitProps(
    propsWithDefaults,
    LOCAL_BUTTON_PROPS
  );

  const shouldDisableWave = () =>
    localProps.disableWave ||
    localProps.type === "text" ||
    localProps.type === "link";

  const isIconOnly = () =>
    !isNil(localProps.icon) && isNil(localProps.children);

  const classList = () => {
    const classes = {
      [styles.Button]: true,
      [styles.iconOnly]: isIconOnly(),
      [styles.icon]: !isNil(localProps.icon),
      [localProps.class ?? ""]: !isNil(localProps.class),
    };

    Object.entries(localProps).forEach(([key, value]) => {
      if (value && key !== "children") {
        if (typeof value === "boolean") {
          classes[styles[key]] = true;
        } else if (typeof value === "string") {
          classes[styles[`${key}-${value}`]] = true;
        }
      }
    });

    return classes;
  };

  return (
    <Wave color={theme.colors.primaryColor} disabled={shouldDisableWave()}>
      {
        <button
          classList={classList()}
          disabled={localProps.disabled || localProps.loading}
          {...otherProps}
        >
          <span
            class={styles.buttonContent}
            style={{
              gap:
                (localProps.icon || localProps.loading) &&
                !isNil(localProps.children)
                  ? `${localProps.iconGap}px`
                  : 0,
            }}
          >
            {isNil(localProps.icon) && (
              <span
                classList={{
                  [styles.spacer]: true,
                  [styles.loading]: localProps.loading,
                }}
              >
                {localProps.loading && <SpinnerIcon />}
              </span>
            )}
            {!isNil(localProps.icon) && localProps.loading && <SpinnerIcon />}
            {localProps.icon && !localProps.loading && localProps.icon}
            <span>{props.children}</span>
          </span>
        </button>
      }
    </Wave>
  );
};
