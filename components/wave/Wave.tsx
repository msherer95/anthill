import {
  Accessor,
  children,
  Component,
  createEffect,
  JSX,
  onCleanup,
} from "solid-js";
import styles from "./Wave.module.scss";

export type WaveProps = {
  children: JSX.Element;
  color: string;
  disabled?: boolean;
};

export const Wave: Component<WaveProps> = (props) => {
  const resolvedChild = children(() => props.children) as Accessor<HTMLElement>;
  if (!(resolvedChild() instanceof HTMLElement)) {
    throw new Error("Child must be an HTML element");
  }

  if (!props.disabled) {
    createEffect(() => {
      resolvedChild().style.position = "relative";
      const onClick = () => {
        const node = document.createElement("span");
        node.classList.add(styles.wave);
        resolvedChild().appendChild(node);
        node.style.setProperty("--ant-wave-color", props.color);
        node.addEventListener("animationend", () => {
          resolvedChild().removeChild(node);
        });
      };

      resolvedChild().addEventListener("click", onClick);
      onCleanup(() => resolvedChild().removeEventListener("click", onClick));
    });
  }

  return <>{resolvedChild()}</>;
};
