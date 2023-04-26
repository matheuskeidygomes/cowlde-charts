import React from "react";
import StackedPositiveNegativeBarChart from "./index";

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", stackId: "a" },
    { title: "pv", color: "#82ca9d", stackId: "a" },
    { title: "amt", color: "#ffc658", stackId: "b" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      title: "Page B",
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      title: "Page E",
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      title: "Page F",
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      title: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
};

describe("Stacked Positive Negative Bar Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <StackedPositiveNegativeBarChart
        dataSource={dataSource}
        width={"100%"}
        height={300}
        dashGrid="3 3"
        barSize={30}
      />
    );
    cy.get(".recharts-responsive-container").should(
      "have.css",
      "height",
      "300px"
    );
    cy.get(".recharts-cartesian-grid-horizontal line").should(
      "have.css",
      "stroke-dasharray",
      "3px, 3px"
    );
  });
});
