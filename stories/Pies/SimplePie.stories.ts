import type { Meta, StoryObj } from "@storybook/react";
import SimplePieChart from "../../src/components/Pies/SimplePie";

const meta = {
  title: "API/Pies/Simple Pie",
  component: SimplePieChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof SimplePieChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  cells: [
    { color: "#8884d8" },
    { color: "#82ca9d" },
    { color: "#ffc658" },
    { color: "#ff0000" },
  ],
  data: [
    { title: "Group A", value: 400 },
    { title: "Group B", value: 300 },
    { title: "Group C", value: 300 },
    { title: "Group D", value: 200 },
  ],
};

export const Example: Story = {
  args: {
    width: "100%",
    height: 300,
    dataSource,
    outerRadius: 80,
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
