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
import { ChartElement, BarElement } from "../../../types";

export default function BiaxialBarChart(props: ChartElement) {
  const {
    width,
    height,
    dataSource,
    dashGrid,
    leftAxisColor,
    rightAxisColor,
    barSize,
  } = props;

  function generateBars() {
    const bars = dataSource.bars.map((bar: BarElement, index: number) => {
      const { title, color, axisId } = bar;
      return (
        <Bar
          key={index}
          yAxisId={axisId}
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
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke={leftAxisColor ? leftAxisColor : defaultValues.color}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={rightAxisColor ? rightAxisColor : defaultValues.color}
        />
        <Tooltip />
        <Legend />
        {generateBars()}
      </BarChart>
    </ResponsiveContainer>
  );
}
