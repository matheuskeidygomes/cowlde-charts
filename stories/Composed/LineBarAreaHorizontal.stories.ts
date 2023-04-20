import type { Meta, StoryObj } from "@storybook/react";
import LineBarAreaHorizontalChart from "../../src/components/Composed/LineBarAreaHorizontal";

const meta = {
  title: "API/Composed/Line Bar Area Horizontal",
  component: LineBarAreaHorizontalChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof LineBarAreaHorizontalChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  areas: [{ title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 }],
  lines: [{ title: "uv", color: "#8884d8", type: "monotone" }],
  bars: [{ title: "pv", color: "#82ca9d" }],
  data: [
    {
      title: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      title: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      title: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      title: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
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
