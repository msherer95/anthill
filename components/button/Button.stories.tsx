import { Meta, Story } from "@storybook/html";
import { StoryFnHtmlReturnType } from "@storybook/html/dist/ts3.9/client/preview/types";
import { createEffect, createSignal } from "solid-js";
import { PowerIcon } from "../icons/power/PowerIcon";
import styles from "../story.module.scss";
import { DefaultThemeProvider } from "../theme/ThemeContext";
import { Button as ButtonComponent, ButtonProps } from "./Button";

export default {
  title: "Anthill/Button",
  component: ButtonComponent as unknown,
  argTypes: {
    type: {
      options: ["primary", "default", "dashed", "text", "link"],
      control: { type: "select" },
    },
  },
} as Meta;

const [loading1, setLoading1] = createSignal(false);
const [loading2, setLoading2] = createSignal(false);
const [loading3, setLoading3] = createSignal(false);

createEffect(() => {
  if (loading1()) {
    setTimeout(() => {
      setLoading1(false);
    }, 5000);
  }
});

createEffect(() => {
  if (loading2()) {
    setTimeout(() => {
      setLoading2(false);
    }, 5000);
  }
});

createEffect(() => {
  if (loading3()) {
    setTimeout(() => {
      setLoading3(false);
    }, 5000);
  }
});

const Template: Story<ButtonProps> = (props: ButtonProps) =>
  (
    <DefaultThemeProvider>
      <div class={styles.section}>
        <h3 class={styles.title}>Types</h3>
        <div class={styles.row}>
          <ButtonComponent type="primary">Primary</ButtonComponent>
          <ButtonComponent type="default">Default</ButtonComponent>
          <ButtonComponent type="dashed">Dashed</ButtonComponent>
          <ButtonComponent type="text">Text</ButtonComponent>
          <ButtonComponent type="link">Link</ButtonComponent>
        </div>
      </div>
      <div class={styles.section}>
        <h3 class={styles.title}>Sizes</h3>
        <div class={styles.row}>
          <ButtonComponent size="large">Large</ButtonComponent>
          <ButtonComponent size="default">Default</ButtonComponent>
          <ButtonComponent size="small">Small</ButtonComponent>
        </div>
      </div>
      <div class={styles.section}>
        <h3 class={styles.title}>Shapes</h3>
        <div class={styles.row}>
          <ButtonComponent shape="default">Default</ButtonComponent>
          <ButtonComponent shape="circle">
            <PowerIcon />
          </ButtonComponent>
          <ButtonComponent shape="round">Round</ButtonComponent>
        </div>
      </div>
      <div class={styles.section}>
        <h3 class={styles.title}>Loading</h3>
        <div class={styles.row}>
          <ButtonComponent loading>Loading</ButtonComponent>
          <ButtonComponent
            icon={<PowerIcon />}
            loading={loading1()}
            onClick={() => setLoading1(true)}
          >
            Click me!
          </ButtonComponent>
          <ButtonComponent
            loading={loading2()}
            onClick={() => setLoading2(true)}
          >
            Click me!
          </ButtonComponent>
          <ButtonComponent
            icon={<PowerIcon />}
            loading={loading3()}
            onClick={() => setLoading3(true)}
          ></ButtonComponent>
        </div>
      </div>
      <div class={styles.section}>
        <h3 class={styles.title}>Other states</h3>
        <div
          class={styles.row}
          style={{ "background-color": "#cbcbcb", padding: "20px" }}
        >
          <ButtonComponent ghost>Ghost Primary</ButtonComponent>
          <ButtonComponent ghost type="default">
            Ghost Default
          </ButtonComponent>
          <ButtonComponent ghost type="dashed">
            Ghost Dashed
          </ButtonComponent>
        </div>
        <div class={styles.row}>
          <ButtonComponent icon={<PowerIcon />}>Icon</ButtonComponent>
        </div>
        <div style={{ width: "100%" }}>
          <ButtonComponent block>Block</ButtonComponent>
        </div>
      </div>
      <div class={styles.section}>
        <h3 class={styles.title}>Playground</h3>
        <ButtonComponent {...props} />
      </div>
    </DefaultThemeProvider>
  ) as unknown as StoryFnHtmlReturnType;

export const Button = Template.bind({});
Button.args = {
  children: "Button",
  type: "primary",
  disableWave: false,
};
