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
import {
  ChartElement,
  BarElement,
  AreaElement,
  LineElement,
} from "../../../types";

export default function LineBarAreaChart(props: ChartElement) {
  const { width, height, dataSource, dashGrid, barSize } = props;

  function generateChartElements() {
    const bars = dataSource.bars.map((bar: BarElement) => {
      const { title, color } = bar;
      return (
        <Bar
          key={title}
          barSize={barSize ? barSize : defaultValues.barSize}
          dataKey={title}
          fill={color ? color : defaultValues.color}
        />
      );
    });

    const areas = dataSource.areas.map((area: AreaElement) => {
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

    const lines = dataSource.lines.map((line: LineElement) => {
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

    return [...areas, ...bars, ...lines];
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <ComposedChart data={dataSource.data}>
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        {generateChartElements()}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
