export const argTypes = {
  width: {
    description: "Width of the chart container.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "100%" },
    },
    control: {
      type: "text",
    },
  },
  height: {
    description: "Height of the chart container.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "300" },
    },
    control: {
      type: "number",
    },
  },
  dataSource: {
    description: "Data source for the chart.",
    table: {
      type: { summary: "object" },
      defaultValue: { summary: "undefined" },
    },
    control: {
      type: "object",
    },
  },
  dashGrid: {
    description: "Dash grid stroke for the chart.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "3 3" },
    },
    control: {
      type: "text",
    },
  },
  barSize: {
    description: "Size of the bar.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "30" },
    },
    control: {
      type: "number",
    },
  },
  onClick: {
    description: "Click event handler.",
    table: {
      type: { summary: "function" },
      defaultValue: { summary: "undefined" },
    },
    control: {
      type: "function",
    },
  },
  brushHeight: {
    description: "Height of the brush input.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "30" },
    },
    control: {
      type: "number",
    },
  },
  brushColor: {
    description: "Color of the brush input.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "#8884d8" },
    },
    control: {
      type: "color",
    },
  },
  brushFilter: {
    description:
      "Filtered value from the dataSource.data array used in the brush input.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "title" },
    },
    control: {
      type: "text",
    },
  },
  leftAxisColor: {
    description: "Color of the left axis.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "#8884d8" },
    },
    control: {
      type: "color",
    },
  },
  rightAxisColor: {
    description: "Color of the right axis.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "#82ca9d" },
    },
    control: {
      type: "color",
    },
  },
  outerRadius: {
    description: "Outer radius of the pie chart.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "80" },
    },
    control: {
      type: "number",
    },
  },
  innerRadius: {
    description: "Inner radius of the pie chart.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "60" },
    },
    control: {
      type: "number",
    },
  },
};
