import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import DeleteButton from "./DeleteButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/DeleteButton",
  component: DeleteButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DeleteButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DeleteButton> = (args) => <DeleteButton {...args} />;

const testArguments = {
  deletable: true,
  handleDelete: () => console.log("Delete"),
};

export const Basic = Template.bind({});
Basic.args = testArguments;

export const Disabled = Template.bind({});
Disabled.args = {
  ...testArguments,
  deletable: false,
};

export const Clicked = Template.bind({});
Clicked.args = testArguments;
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  console.log("canvas", canvas);
  const button = await canvas.getByRole("button", { name: "Delete" });
  await userEvent.click(button);
  await expect(button).toHaveAccessibleName("Delete");
  await expect(button).toHaveClass("chakra-button css-1fgcusf");
};

export const Hovered = Template.bind({});
Hovered.args = testArguments;
Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: "Delete" });
  await userEvent.hover(button);
  await expect(button).toHaveAccessibleName("Delete");
  await expect(button).toHaveClass("chakra-button css-1fgcusf");
};
