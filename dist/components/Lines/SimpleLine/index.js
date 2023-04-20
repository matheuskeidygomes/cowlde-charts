import React from "react";
import defaultValues from "../../../common/default";
import { LineChart, Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
export default function SimpleLineChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid;
    function generateLines() {
        var lines = dataSource.lines.map(function (line, index) {
            var title = line.title, type = line.type, color = line.color, dashed = line.dashed;
            return (React.createElement(Line, { type: type ? type : defaultValues.type, key: index, dataKey: title, stroke: color ? color : defaultValues.color, strokeDasharray: (dashed === null || dashed === void 0 ? void 0 : dashed.active) ? dashed.stroke : defaultValues.lineStroke, activeDot: {
                    onClick: function (_, payload) {
                        return props.onClick ? payload["payload"] : null;
                    },
                    cursor: "pointer",
                    r: 6,
                } }));
        });
        return lines;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(LineChart, { data: dataSource.data },
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(XAxis, { dataKey: "title" }),
            ";",
            React.createElement(YAxis, null),
            React.createElement(Tooltip, null),
            React.createElement(Legend, null),
            generateLines())));
}
