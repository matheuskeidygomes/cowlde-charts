import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import defaultValues from "../../../common/default";
export default function StackedAreaChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid;
    function generateAreas() {
        var areas = dataSource.areas.map(function (area, index) {
            var title = area.title, color = area.color, stackId = area.stackId, type = area.type, opacity = area.opacity;
            return (React.createElement(Area, { key: index, type: type ? type : defaultValues.type, dataKey: title, stackId: stackId ? stackId : defaultValues.stackId, stroke: color ? color : defaultValues.color, fill: color ? color : defaultValues.color, opacity: opacity ? opacity : defaultValues.opacity }));
        });
        return areas;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(AreaChart, { data: dataSource.data },
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(XAxis, { dataKey: "title" }),
            React.createElement(YAxis, null),
            React.createElement(Tooltip, null),
            generateAreas())));
}
