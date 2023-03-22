import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import ConnectWallet from "./ConnectWallet";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button/ConnectWallet",
  component: ConnectWallet,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    connected: { control: "boolean" },
  },
} as ComponentMeta<typeof ConnectWallet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConnectWallet> = (args) => <ConnectWallet {...args} />;

const testArguments = {
  walletPlaceholder: "0x0000000000000000000000000000000000000000",
};

export const AskToConnectWallet = Template.bind({});
AskToConnectWallet.args = testArguments;

export const Connected = Template.bind({});
Connected.args = testArguments;

export const NotConnected_Clicked = Template.bind({});
NotConnected_Clicked.args = {
  ...testArguments,
  connected: false,
};
NotConnected_Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: "Connect Wallet" });
  await userEvent.click(button);
  await expect(button).toHaveAccessibleName("Connect Wallet");
  await expect(button).toHaveClass("chakra-button css-dggl97");
};

export const NotConnected_Hovered = Template.bind({});
NotConnected_Hovered.args = {
  ...testArguments,
  connected: false,
};
NotConnected_Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", { name: "Connect Wallet" });
  await userEvent.hover(button);
  await expect(button).toHaveAccessibleName("Connect Wallet");
  await expect(button).toHaveClass("chakra-button css-dggl97");
};

export const Connected_Clicked = Template.bind({});
Connected_Clicked.args = {
  ...testArguments,
  connected: true,
};
Connected_Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", {
    name: `${testArguments.walletPlaceholder.slice(0, 6)}...${testArguments.walletPlaceholder.slice(
      testArguments.walletPlaceholder.length - 4,
      testArguments.walletPlaceholder.length
    )}`,
  });
  await userEvent.click(button);
  await expect(button).toHaveAccessibleName(
    `${testArguments.walletPlaceholder.slice(0, 6)}...${testArguments.walletPlaceholder.slice(
      testArguments.walletPlaceholder.length - 4,
      testArguments.walletPlaceholder.length
    )}`
  );
  await expect(button).toHaveClass("chakra-button css-dggl97");
};

export const Connected_Hovered = Template.bind({});
Connected_Hovered.args = {
  ...testArguments,
  connected: true,
};
Connected_Hovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.getByRole("button", {
    name: `${testArguments.walletPlaceholder.slice(0, 6)}...${testArguments.walletPlaceholder.slice(
      testArguments.walletPlaceholder.length - 4,
      testArguments.walletPlaceholder.length
    )}`,
  });
  await userEvent.hover(button);
  await expect(button).toHaveAccessibleName(
    `${testArguments.walletPlaceholder.slice(0, 6)}...${testArguments.walletPlaceholder.slice(
      testArguments.walletPlaceholder.length - 4,
      testArguments.walletPlaceholder.length
    )}`
  );
  await expect(button).toHaveClass("chakra-button css-dggl97");
};
