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
  Brush,
} from "recharts";
import defaultValues from "../../../common/default";
import { ChartElement, BarElement } from "../../../types";

export default function BrushBarChart(props: ChartElement) {
  const {
    width,
    height,
    dataSource,
    dashGrid,
    brushFilter,
    brushColor,
    brushHeight,
    barSize,
  } = props;

  function generateBars() {
    const bars = dataSource.bars.map((bar: BarElement, index: number) => {
      const { title, color } = bar;
      return (
        <Bar
          key={index}
          dataKey={title}
          barSize={barSize ? barSize : defaultValues.barSize}
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
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush
          dataKey={brushFilter ? brushFilter : defaultValues.brushFilter}
          height={brushHeight ? brushHeight : defaultValues.brushHeight}
          stroke={brushColor ? brushColor : defaultValues.filterColor}
        />
        {generateBars()}
      </BarChart>
    </ResponsiveContainer>
  );
}
