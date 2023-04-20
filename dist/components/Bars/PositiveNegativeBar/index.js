import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, } from "recharts";
import defaultValues from "../../../common/default";
export default function PositiveNegativeBarChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid, barSize = props.barSize;
    function generateBars() {
        var bars = dataSource.bars.map(function (bar, index) {
            var title = bar.title, color = bar.color;
            return (React.createElement(Bar, { key: index, barSize: barSize ? barSize : defaultValues.barSize, dataKey: title, fill: color ? color : defaultValues.color }));
        });
        return bars;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(BarChart, { data: dataSource.data },
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(XAxis, { dataKey: "title" }),
            React.createElement(YAxis, null),
            React.createElement(Tooltip, null),
            React.createElement(Legend, null),
            React.createElement(ReferenceLine, { y: 0, stroke: "#000" }),
            generateBars())));
}
