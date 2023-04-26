import type { Meta, StoryObj } from "@storybook/react";
import StackedBarChart from ".";
import { argTypes } from "../../../common/control";

const meta = {
  title: "API/Bars/Stacked Bar",
  component: StackedBarChart,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    controls: {
      include: [
        "width",
        "height",
        "dataSource",
        "dashGrid",
        "barSize",
        "onClick",
      ],
    },
  },
} satisfies Meta<typeof StackedBarChart>;

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
    barSize: 20,
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
