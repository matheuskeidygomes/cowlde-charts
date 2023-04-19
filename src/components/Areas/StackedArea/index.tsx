import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import defaultValues from "../../../common/default";

export default function StackedAreaChart(props: any) {
  const { width, height, dataSource, dashGrid } = props;

  function generateAreas() {
    const areas = dataSource.areas.map((area: any, index: number) => {
      const { title, color, stackId, type, opacity } = area;
      return (
        <Area
          key={index}
          type={type ? type : defaultValues.type}
          dataKey={title}
          stackId={stackId ? stackId : defaultValues.stackId}
          stroke={color ? color : defaultValues.color}
          fill={color ? color : defaultValues.color}
          opacity={opacity ? opacity : defaultValues.opacity}
        />
      );
    });
    return areas;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <AreaChart data={dataSource.data}>
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        {generateAreas()}
      </AreaChart>
    </ResponsiveContainer>
  );
}
