import type { Meta, StoryObj } from "@storybook/react";
import BiaxialBarChart from "../../src/components/Bars/BiaxialBar";

const meta = {
  title: "API/Bars/Biaxial Bar",
  component: BiaxialBarChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof BiaxialBarChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", axisId: "left" },
    { title: "pv", color: "#82ca9d", axisId: "right" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
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
    leftAxisColor: "#8884d8",
    rightAxisColor: "#82ca9d",
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
