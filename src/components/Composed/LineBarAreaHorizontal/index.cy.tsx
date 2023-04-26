import React from "react";
import LineBarAreaHorizontalChart from "./index";

const dataSource = {
  areas: [{ title: "amt", color: "#ffc658", type: "monotone", opacity: 0.7 }],
  lines: [{ title: "uv", color: "#8884d8", type: "monotone" }],
  bars: [{ title: "pv", color: "#82ca9d" }],
  data: [
    {
      title: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      title: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      title: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      title: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
  ],
};

describe("Line Bar Area Horizontal Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <LineBarAreaHorizontalChart
        dataSource={dataSource}
        barSize={30}
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
