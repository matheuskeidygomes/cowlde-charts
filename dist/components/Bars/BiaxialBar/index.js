import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";
import defaultValues from "../../../common/default";
export default function BiaxialBarChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid, leftAxisColor = props.leftAxisColor, rightAxisColor = props.rightAxisColor, barSize = props.barSize;
    function generateBars() {
        var bars = dataSource.bars.map(function (bar, index) {
            var title = bar.title, color = bar.color, axisId = bar.axisId;
            return (React.createElement(Bar, { key: index, yAxisId: axisId, barSize: barSize ? barSize : defaultValues.barSize, dataKey: title, fill: color ? color : defaultValues.color }));
        });
        return bars;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(BarChart, { data: dataSource.data },
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(XAxis, { dataKey: "title" }),
            React.createElement(YAxis, { yAxisId: "left", orientation: "left", stroke: leftAxisColor ? leftAxisColor : defaultValues.color }),
            React.createElement(YAxis, { yAxisId: "right", orientation: "right", stroke: rightAxisColor ? rightAxisColor : defaultValues.color }),
            React.createElement(Tooltip, null),
            React.createElement(Legend, null),
            generateBars())));
}
