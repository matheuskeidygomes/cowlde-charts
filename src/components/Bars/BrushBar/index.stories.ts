import type { Meta, StoryObj } from "@storybook/react";
import BrushBarChart from ".";

const meta = {
  title: "API/Bars/Brush Bar",
  component: BrushBarChart,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof BrushBarChart>;

type Story = StoryObj<typeof meta>;

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8" },
    { title: "pv", color: "#82ca9d" },
  ],
  data: [
    { title: "1", uv: 300, pv: 456 },
    { title: "2", uv: -145, pv: 230 },
    { title: "3", uv: -100, pv: 345 },
    { title: "4", uv: -8, pv: 450 },
    { title: "5", uv: 100, pv: 321 },
    { title: "6", uv: 9, pv: 235 },
    { title: "7", uv: 53, pv: 267 },
    { title: "8", uv: 252, pv: -378 },
    { title: "9", uv: 79, pv: -210 },
    { title: "10", uv: 294, pv: -23 },
    { title: "12", uv: 43, pv: 45 },
    { title: "13", uv: -74, pv: 90 },
    { title: "14", uv: -71, pv: 130 },
    { title: "15", uv: -117, pv: 11 },
    { title: "16", uv: -186, pv: 107 },
    { title: "17", uv: -16, pv: 926 },
    { title: "18", uv: -125, pv: 653 },
    { title: "19", uv: 222, pv: 366 },
    { title: "20", uv: 372, pv: 486 },
    { title: "21", uv: 182, pv: 512 },
    { title: "22", uv: 164, pv: 302 },
    { title: "23", uv: 316, pv: 425 },
    { title: "24", uv: 131, pv: 467 },
    { title: "25", uv: 291, pv: -190 },
    { title: "26", uv: -47, pv: 194 },
    { title: "27", uv: -415, pv: 371 },
    { title: "28", uv: -182, pv: 376 },
    { title: "29", uv: -93, pv: 295 },
    { title: "30", uv: -99, pv: 322 },
    { title: "31", uv: -52, pv: 246 },
    { title: "32", uv: 154, pv: 33 },
    { title: "33", uv: 205, pv: 354 },
    { title: "34", uv: 70, pv: 258 },
    { title: "35", uv: -25, pv: 359 },
    { title: "36", uv: -59, pv: 192 },
    { title: "37", uv: -63, pv: 464 },
    { title: "38", uv: -91, pv: -2 },
    { title: "39", uv: -66, pv: 154 },
    { title: "40", uv: -50, pv: 186 },
  ],
};

export const Example: Story = {
  args: {
    width: "100%",
    height: 300,
    dataSource,
    dashGrid: "3 3",
    brushFilter: "title",
    brushColor: "#8884d8",
    brushHeight: 30,
    barSize: 20,
    onClick: (details: any) => console.log(details),
  },
};

export default meta;
