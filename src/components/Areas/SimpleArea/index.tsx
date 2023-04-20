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
import { ChartElement, AreaElement } from "../../../types";

export default function SimpleAreaChart(props: ChartElement) {
  const { width, height, dataSource, dashGrid } = props;

  function generateAreas() {
    const areas = dataSource.areas.map((area: AreaElement, index: number) => {
      const { title, color, opacity, type } = area;
      return (
        <Area
          key={index}
          type={type ? type : defaultValues.type}
          dataKey={title}
          stroke={color ? color : defaultValues.color}
          fillOpacity={opacity ? opacity : defaultValues.opacity}
          fill={`url(#${title})`}
        />
      );
    });
    return areas;
  }

  function generateGradients() {
    const gradients = dataSource.areas.map(
      (area: AreaElement, index: number) => {
        const { title, color, opacity } = area;
        return (
          <linearGradient key={index} id={title} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={color ? color : defaultValues.color}
              stopOpacity={opacity ? opacity : defaultValues.opacity}
            />
            <stop
              offset="95%"
              stopColor={color ? color : defaultValues.color}
              stopOpacity={0}
            />
          </linearGradient>
        );
      }
    );
    return gradients;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <AreaChart data={dataSource.data}>
        <defs>{generateGradients()}</defs>
        <XAxis dataKey="title" />
        <YAxis />
        <CartesianGrid
          strokeDasharray={dashGrid ? dashGrid : defaultValues.gridStroke}
        />
        <Tooltip />
        {generateAreas()}
      </AreaChart>
    </ResponsiveContainer>
  );
}
