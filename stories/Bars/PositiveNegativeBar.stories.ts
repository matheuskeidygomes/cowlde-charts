import type { Meta, StoryObj } from "@storybook/react";
import PositiveNegativeBarChart from "../../src/components/Bars/PositiveNegativeBar";

const meta = {
  title: "API/Bars/Positive and Negative Bar",
  component: PositiveNegativeBarChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof PositiveNegativeBarChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8" },
    { title: "pv", color: "#82ca9d" },
    { title: "amt", color: "#ffc658" },
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
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: -2000,
      pv: -9800,
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
    barSize: 20,
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
