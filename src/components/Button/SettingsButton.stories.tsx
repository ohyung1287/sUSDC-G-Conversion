import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SettingsButton } from "components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/SettingsButton",
  component: SettingsButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SettingsButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SettingsButton> = (args) => <SettingsButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  network: "Mainnet",
};
