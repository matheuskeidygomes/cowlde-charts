import React from "react";
import ActiveLabelPieChart from "./index";

const dataSource = {
  cells: [
    { color: "#8884d8" },
    { color: "#82ca9d" },
    { color: "#ffc658" },
    { color: "#ff0000" },
  ],
  data: [
    { title: "Group A", value: 400 },
    { title: "Group B", value: 300 },
    { title: "Group C", value: 300 },
    { title: "Group D", value: 200 },
  ],
};

describe("Active Label Pie Chart", () => {
  it("render correctly", () => {
    cy.mount(
      <ActiveLabelPieChart
        dataSource={dataSource}
        width={"100%"}
        height={300}
        outerRadius={80}
        innerRadius={60}
      />
    );
    cy.get(".recharts-responsive-container").should(
      "have.css",
      "height",
      "300px"
    );
  });
});
