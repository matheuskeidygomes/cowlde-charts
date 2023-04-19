import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import defaultValues from "../../../common/default";

export default function StackedBarChart(props: any) {
  const { width, height, dataSource, dashGrid } = props;

  function generateBars() {
    const bars = dataSource.bars.map((bar: any, index: number) => {
      const { title, color, stackId } = bar;
      return (
        <Bar
          key={index}
          dataKey={title}
          fill={color ? color : defaultValues.color}
          stackId={stackId ? stackId : defaultValues.stackId}
        />
      );
    });
    return bars;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <BarChart data={dataSource.data}>
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        {generateBars()}
      </BarChart>
    </ResponsiveContainer>
  );
}
