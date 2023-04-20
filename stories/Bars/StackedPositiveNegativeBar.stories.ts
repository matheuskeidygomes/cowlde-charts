import type { Meta, StoryObj } from "@storybook/react";
import StackedPositiveNegativeBarChart from "../../src/components/Bars/StackedPositiveNegativeBar";

const meta = {
  title: "API/Bars/Stacked Positive and Negative Bar",
  component: StackedPositiveNegativeBarChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof StackedPositiveNegativeBarChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", stackId: "a" },
    { title: "pv", color: "#82ca9d", stackId: "a" },
    { title: "amt", color: "#ffc658", stackId: "b" },
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
    {
      title: "Page E",
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      title: "Page F",
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      title: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
