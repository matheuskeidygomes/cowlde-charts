import type { Meta, StoryObj } from "@storybook/react";
import StackedAreaChart from ".";

const meta = {
  title: "API/Areas/Stacked Area",
  component: StackedAreaChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof StackedAreaChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  areas: [
    {
      title: "uv",
      color: "#8884d8",
      type: "monotone",
      opacity: 0.7,
      stackId: "a",
    },
    {
      title: "pv",
      color: "#82ca9d",
      type: "monotone",
      opacity: 0.7,
      stackId: "a",
    },
    {
      title: "amt",
      color: "#ffc658",
      type: "monotone",
      opacity: 0.7,
      stackId: "a",
    },
  ],
  data: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

export const Example: Story = {
  args: {
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
