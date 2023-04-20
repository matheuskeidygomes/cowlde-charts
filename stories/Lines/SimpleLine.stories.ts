import type { Meta, StoryObj } from "@storybook/react";
import SimpleLineChart from "../../src/components/Lines/SimpleLine";

const meta = {
  title: "API/Lines/Simple Line",
  component: SimpleLineChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleLineChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  lines: [
    {
      title: "uv",
      color: "#8884d8",
      dashed: { active: true, stroke: "3 3" },
      type: "linear",
    },
    {
      title: "pv",
      color: "#82ca9d",
      dashed: { active: false, stroke: "" },
      type: "monotone",
    },
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
