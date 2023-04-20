import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";
import defaultValues from "../../../common/default";
export default function StackedBarChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid, barSize = props.barSize;
    function generateBars() {
        var bars = dataSource.bars.map(function (bar, index) {
            var title = bar.title, color = bar.color, stackId = bar.stackId;
            return (React.createElement(Bar, { key: index, dataKey: title, barSize: barSize ? barSize : defaultValues.barSize, fill: color ? color : defaultValues.color, stackId: stackId ? stackId : defaultValues.stackId }));
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
            generateBars())));
}
