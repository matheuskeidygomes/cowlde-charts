import React from "react";
import SimpleLineChart from "./index";

const dataSource = {
  lines: [
    {
      title: "uv",
      color: "#8884d8",
      dashed: { active: true, stroke: "3 3" },
      type: "linear",
    },
    {
      title: "pv",
      color: "#82ca9d",
      dashed: { active: false, stroke: "" },
      type: "monotone",
    },
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
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ],
};

describe("Simple Line Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <SimpleLineChart
        dataSource={dataSource}
        width={"100%"}
        height={300}
        dashGrid="3 3"
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
