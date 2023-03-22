import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import StatusButton from "./StatusButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/StatusButton",
  component: StatusButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof StatusButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusButton> = (args) => <StatusButton {...args} />;

const testArguments = {
  submitted: true,
};

export const QueryTxStatus = Template.bind({});
QueryTxStatus.args = {
  submitted: false,
};

export const Querying = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Querying.args = testArguments;

export const Clicked = Template.bind({});
Clicked.args = testArguments;
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: "Querying" });
  await userEvent.click(button);
  await expect(button).toHaveAccessibleName("Querying");
  await expect(button).toHaveClass("chakra-button css-zbehh8");
};

export const Hovered = Template.bind({});
Hovered.args = testArguments;
Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: "Querying" });
  await userEvent.hover(button);
  await expect(button).toHaveAccessibleName("Querying");
  await expect(button).toHaveClass("chakra-button css-zbehh8");
};
