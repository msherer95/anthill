import { JSX } from "solid-js";

type CustomSolidAttributes<E extends Element> = Omit<
  JSX.CustomAttributes<E>,
  "$ServerOnly"
>;

export type StandardComponentProps<E extends Element> = JSX.HTMLAttributes<E> &
  CustomSolidAttributes<E>;
