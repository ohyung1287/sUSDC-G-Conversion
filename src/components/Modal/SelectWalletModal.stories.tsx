import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectWalletModal } from "components/Modal";

export default {
  title: "Modal/SelectWalletModal",
  component: SelectWalletModal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SelectWalletModal>;

const Template: ComponentStory<typeof SelectWalletModal> = (args) => {
  return <SelectWalletModal {...args} />;
};

export const Select_Wallet_Modal = Template.bind({});
Select_Wallet_Modal.args = {
  isOpen: true,
  closeModal: () => {
    null;
  },
};
