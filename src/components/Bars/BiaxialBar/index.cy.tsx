import React from "react";
import BiaxialBarChart from "./index";

const dataSource = {
  bars: [
    { title: "uv", color: "#8884d8", axisId: "left" },
    { title: "pv", color: "#82ca9d", axisId: "right" },
  ],
  data: [
    {
      title: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      title: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      title: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
    },
  ],
};

describe("Biaxial Bar Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <BiaxialBarChart
        dataSource={dataSource}
        leftAxisColor="#8884d8"
        rightAxisColor="#82ca9d"
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
    cy.get(".recharts-bar-rectangle").should("have.css", "width", "30px");
  });
});
