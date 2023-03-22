import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { CopyWallet } from "components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/CopyWallet",
  component: CopyWallet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CopyWallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CopyWallet> = (args) => <CopyWallet testActive={true} {...args} />;
const testArguments = {
  testActive: true,
};

export const Basic = Template.bind({});
Basic.args = testArguments;
