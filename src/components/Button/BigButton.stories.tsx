import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import BigButton from "./BigButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/BigButton",
  component: BigButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BigButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BigButton> = (args) => <BigButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: ["Basic", "Basic clicked"],
  clicked: false,
  handleClick: () => console.log("Basic button clicked"),
};

export const BasicClicked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicClicked.args = {
  text: ["Basic", "Basic clicked"],
  clicked: true,
  handleClick: () => console.log("Basic button clicked"),
};
BasicClicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: `Basic` });
  await userEvent.click(button);
  await expect(button).toHaveTextContent("Basic clicked");
  await expect(button).toHaveAccessibleName("Basic");
  await expect(button).toHaveClass("chakra-button css-7iym3u");
};

export const BasicHovered = Template.bind({});
BasicHovered.args = {
  text: ["Basic", "Basic clicked"],
  clicked: false,
  handleClick: () => console.log("Basic button clicked"),
};
BasicHovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: `Basic` });
  await userEvent.hover(button);
  await expect(button).toHaveTextContent("Basic");
  await expect(button).toHaveAccessibleName("Basic");
  await expect(button).toHaveClass("chakra-button css-7iym3u");
};

export const CreatePool = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CreatePool.args = {
  text: ["Create Pool", "Creating Pool"],
  clicked: false,
  handleClick: () => console.log("Create Pool clicked"),
};

export const MakeRepayment = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MakeRepayment.args = {
  text: ["Make Repayment", "Making Repayment"],
  clicked: false,
  handleClick: () => console.log("Make Repayment clicked"),
};
