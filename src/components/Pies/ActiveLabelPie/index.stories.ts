import type { Meta, StoryObj } from "@storybook/react";
import ActiveLabelPieChart from ".";
import { argTypes } from "../../../common/control";

const meta = {
  title: "API/Pies/Active Label Pie",
  component: ActiveLabelPieChart,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    controls: {
      include: [
        "width",
        "height",
        "dataSource",
        "dashGrid",
        "onClick",
        "outerRadius",
        "innerRadius",
      ],
    },
  },
} satisfies Meta<typeof ActiveLabelPieChart>;

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
    innerRadius: 60,
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
