import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton } from "components";
import { icons } from "components/Icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: {
      control: "select",
      defaultValue: "CheckMark",
      options: icons,
    },
    submitted: {
      control: "bool",
    },
  },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Icon_Button: ComponentStory<typeof IconButton> = (args) => (
  <IconButton handleSubmit={() => console.log("submit")} {...args} />
);
