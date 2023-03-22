import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import AmountsButtons from "./AmountsButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/Amounts Buttons",
  component: AmountsButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AmountsButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AmountsButtons> = (args) => <AmountsButtons {...args} />;

const testArguments = {
  label: "Mint",
  amounts: ["1", "50", "250", "1000"],
  onClick: () => console.log("Basic button clicked"),
  color: "blue",
  mt: "0.5rem",
  mb: "0.5rem",
  ml: "0.5rem",
  mr: "0.5rem",
  tokenSymbol: "DAI",
};

export const Basic = Template.bind({});
Basic.args = testArguments;

export const Clicked = Template.bind({});
Clicked.args = testArguments;
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  testArguments.amounts.forEach(async (amount) => {
    const button = await canvas.getByRole("button", {
      name: `${testArguments.label} ${amount} ${testArguments.tokenSymbol}`,
    });
    await userEvent.click(button);
    await expect(button).toHaveTextContent(`${testArguments.label} ${amount} ${testArguments.tokenSymbol}`);
    await expect(button).toHaveStyle("color: rgb(43, 108, 176)");
    await expect(button).toHaveAccessibleName(`${testArguments.label} ${amount} ${testArguments.tokenSymbol}`);
  });
};

export const Hovered = Template.bind({});
Hovered.args = testArguments;
Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  testArguments.amounts.forEach(async (amount) => {
    const button = await canvas.getByRole("button", {
      name: `${testArguments.label} ${amount} ${testArguments.tokenSymbol}`,
    });
    await userEvent.hover(button);
    await expect(button).toHaveTextContent(`${testArguments.label} ${amount} ${testArguments.tokenSymbol}`);
    await expect(button).toHaveStyle("color: rgb(43, 108, 176)");
    await expect(button).toHaveAccessibleName(`${testArguments.label} ${amount} ${testArguments.tokenSymbol}`);
  });
};
