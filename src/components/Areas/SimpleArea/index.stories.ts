import type { Meta, StoryObj } from "@storybook/react";
import SimpleAreaChart from ".";

const meta = {
  title: "API/Areas/Simple Area",
  component: SimpleAreaChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleAreaChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  areas: [
    { title: "uv", color: "#8884d8", type: "monotone", opacity: 0.7 },
    { title: "pv", color: "#82ca9d", type: "linear", opacity: 0.7 },
    { title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      title: "Page D",
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
