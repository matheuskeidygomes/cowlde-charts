import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import defaultValues from "../../../common/default";
export default function CustomLabelPieChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, outerRadius = props.outerRadius;
    var RADIAN = Math.PI / 180;
    var renderCustomizedLabel = function (_a) {
        var cx = _a.cx, cy = _a.cy, midAngle = _a.midAngle, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, percent = _a.percent;
        var radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        var x = cx + radius * Math.cos(-midAngle * RADIAN);
        var y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (React.createElement("text", { x: x, y: y, fill: "white", textAnchor: x > cx ? "start" : "end", dominantBaseline: "central" }, "".concat((percent * 100).toFixed(0), "%")));
    };
    function generateCells() {
        var cells = dataSource.cells.map(function (cell, index) {
            var color = cell.color;
            return (React.createElement(Cell, { key: "cell-".concat(index), fill: color ? color : defaultValues.color }));
        });
        return cells;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(PieChart, null,
            React.createElement(Pie, { dataKey: "value", data: dataSource.data, cx: "50%", cy: "50%", labelLine: false, label: renderCustomizedLabel, outerRadius: outerRadius ? outerRadius : defaultValues.outerRadius, fill: "#8884d8" }, generateCells()))));
}
