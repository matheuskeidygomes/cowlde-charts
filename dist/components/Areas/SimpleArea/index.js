import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import defaultValues from "../../../common/default";
export default function SimpleAreaChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid;
    function generateAreas() {
        var areas = dataSource.areas.map(function (area, index) {
            var title = area.title, color = area.color, opacity = area.opacity, type = area.type;
            return (React.createElement(Area, { key: index, type: type ? type : defaultValues.type, dataKey: title, stroke: color ? color : defaultValues.color, fillOpacity: opacity ? opacity : defaultValues.opacity, fill: "url(#".concat(title, ")") }));
        });
        return areas;
    }
    function generateGradients() {
        var gradients = dataSource.areas.map(function (area, index) {
            var title = area.title, color = area.color, opacity = area.opacity;
            return (React.createElement("linearGradient", { key: index, id: title, x1: "0", y1: "0", x2: "0", y2: "1" },
                React.createElement("stop", { offset: "5%", stopColor: color ? color : defaultValues.color, stopOpacity: opacity ? opacity : defaultValues.opacity }),
                React.createElement("stop", { offset: "95%", stopColor: color ? color : defaultValues.color, stopOpacity: 0 })));
        });
        return gradients;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(AreaChart, { data: dataSource.data },
            React.createElement("defs", null, generateGradients()),
            React.createElement(XAxis, { dataKey: "title" }),
            React.createElement(YAxis, null),
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(Tooltip, null),
            generateAreas())));
}
