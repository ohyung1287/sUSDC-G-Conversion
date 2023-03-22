import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SvgIcon, icons } from "components/Icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Icons/SvgIcon",
  component: SvgIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: {
      control: "select",
      defaultValue: "CheckMark",
      options: icons,
    },
    viewBox: {
      control: { type: "text" },
      defaultValue: "-100 -100 712 712",
    },
    fill: {
      control: { type: "color" },
      defaultValue: "black",
    },
    width: {
      control: {
        type: "text",
      },
      defaultValue: "512px",
    },
    height: {
      control: {
        type: "text",
      },
      defaultValue: "512px",
    },
  },
} as ComponentMeta<typeof SvgIcon>;

export const Svg_Icon: ComponentStory<typeof SvgIcon> = (args) => <SvgIcon {...args} />;
