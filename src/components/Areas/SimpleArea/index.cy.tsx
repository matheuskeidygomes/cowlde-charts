import React from "react";
import SimpleAreaChart from "./index";

const dataSource = {
  areas: [
    { title: "uv", color: "#8884d8", type: "linear", opacity: 0.7 },
    { title: "pv", color: "#82ca9d", type: "linear", opacity: 0.7 },
    { title: "amt", color: "#ffc658", type: "linear", opacity: 0.7 },
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
    {
      title: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
};

describe("Simple Area Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <SimpleAreaChart
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
