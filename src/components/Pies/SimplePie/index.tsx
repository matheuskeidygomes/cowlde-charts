import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import defaultValues from "../../../common/default";

export default function CustomLabelPieChart(props: any) {
  const { width, height, dataSource, outerRadius } = props;
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  function generateCells() {
    const cells = dataSource.cells.map((cell: any, index: number) => {
      const { color } = cell;
      return (
        <Cell
          key={`cell-${index}`}
          fill={color ? color : defaultValues.color}
        />
      );
    });
    return cells;
  }

  return (
    <ResponsiveContainer
      width={width ? width : defaultValues.width}
      height={height ? height : defaultValues.height}
    >
      <PieChart>
        <Pie
          dataKey="value"
          data={dataSource.data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={outerRadius ? outerRadius : defaultValues.outerRadius}
          fill="#8884d8"
        >
          {generateCells()}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
