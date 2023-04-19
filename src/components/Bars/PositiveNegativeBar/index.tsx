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
  ReferenceLine,
} from "recharts";
import defaultValues from "../../../common/default";

export default function PositiveNegativeBarChart(props: any) {
  const { width, height, dataSource, dashGrid, barSize } = props;

  function generateBars() {
    const bars = dataSource.bars.map((bar: any, index: number) => {
      const { title, color } = bar;
      return (
        <Bar
          key={index}
          barSize={barSize ? barSize : defaultValues.barSize}
          dataKey={title}
          fill={color ? color : defaultValues.color}
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
        <ReferenceLine y={0} stroke="#000" />
        {generateBars()}
      </BarChart>
    </ResponsiveContainer>
  );
}
