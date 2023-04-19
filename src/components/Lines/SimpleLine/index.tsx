import React from "react";
import { ChartElement, LineElement } from "../../../types";
import defaultValues from "../../../common/default";
import {
  LineChart,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SimpleLineChart(props: ChartElement) {
  const { width, height, dataSource, dashGrid } = props;

  function generateLines() {
    const lines = dataSource.lines.map((line: LineElement, index: number) => {
      const { title, type, color, dashed } = line;
      return (
        <Line
          type={type ? type : defaultValues.type}
          key={index}
          dataKey={title}
          stroke={color ? color : defaultValues.color}
          strokeDasharray={
            dashed?.active ? dashed.stroke : defaultValues.lineStroke
          }
          activeDot={{
            onClick: (_, payload: object) =>
              props.onClick ? payload["payload"] : null,
            cursor: "pointer",
            r: 6,
          }}
        />
      );
    });
    return lines;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <LineChart data={dataSource.data}>
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <XAxis dataKey="title" />;
        <YAxis />
        <Tooltip />
        <Legend />
        {generateLines()}
      </LineChart>
    </ResponsiveContainer>
  );
}
