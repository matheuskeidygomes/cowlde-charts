import React from "react";
import {
  Legend,
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Bar,
  Line,
} from "recharts";
import defaultValues from "../../../common/default";

export default function LineBarAreaHorizontalChart(props: any) {
  const { width, height, dataSource, dashGrid } = props;

  function generateChartElements() {
    const bars = dataSource.bars.map((bar: any) => {
      const { title, color, size } = bar;
      return (
        <Bar
          key={title}
          barSize={size ? size : defaultValues.barSize}
          dataKey={title}
          fill={color ? color : defaultValues.color}
        />
      );
    });

    const areas = dataSource.areas.map((area: any) => {
      const { title, color, type, opacity } = area;
      return (
        <Area
          key={title}
          type={type ? type : defaultValues.type}
          dataKey={title}
          fill={color ? color : defaultValues.color}
          stroke={color ? color : defaultValues.color}
          opacity={opacity ? opacity : defaultValues.opacity}
        />
      );
    });

    const lines = dataSource.lines.map((line: any) => {
      const { title, color, type } = line;
      return (
        <Line
          key={title}
          type={type ? type : defaultValues.type}
          dataKey={title}
          stroke={color ? color : defaultValues.color}
        />
      );
    });

    const elements = [...areas, ...bars, ...lines];
    return elements;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <ComposedChart layout="vertical" data={dataSource.data}>
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <XAxis type="number" />
        <YAxis dataKey="title" type="category" scale="auto" />
        <Tooltip />
        <Legend />
        {generateChartElements()}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
