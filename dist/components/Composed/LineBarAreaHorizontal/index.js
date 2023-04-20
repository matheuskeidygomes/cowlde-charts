var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import { Legend, ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, Bar, Line, } from "recharts";
import defaultValues from "../../../common/default";
export default function LineBarAreaHorizontalChart(props) {
    var width = props.width, height = props.height, dataSource = props.dataSource, dashGrid = props.dashGrid, barSize = props.barSize;
    function generateChartElements() {
        var bars = dataSource.bars.map(function (bar) {
            var title = bar.title, color = bar.color;
            return (React.createElement(Bar, { key: title, barSize: barSize ? barSize : defaultValues.barSize, dataKey: title, fill: color ? color : defaultValues.color }));
        });
        var areas = dataSource.areas.map(function (area) {
            var title = area.title, color = area.color, type = area.type, opacity = area.opacity;
            return (React.createElement(Area, { key: title, type: type ? type : defaultValues.type, dataKey: title, fill: color ? color : defaultValues.color, stroke: color ? color : defaultValues.color, opacity: opacity ? opacity : defaultValues.opacity }));
        });
        var lines = dataSource.lines.map(function (line) {
            var title = line.title, color = line.color, type = line.type;
            return (React.createElement(Line, { key: title, type: type ? type : defaultValues.type, dataKey: title, stroke: color ? color : defaultValues.color }));
        });
        var elements = __spreadArray(__spreadArray(__spreadArray([], areas, true), bars, true), lines, true);
        return elements;
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(ComposedChart, { layout: "vertical", data: dataSource.data },
            React.createElement(CartesianGrid, { strokeDasharray: dashGrid ? dashGrid : defaultValues.gridStroke }),
            React.createElement(XAxis, { type: "number" }),
            React.createElement(YAxis, { dataKey: "title", type: "category", scale: "auto" }),
            React.createElement(Tooltip, null),
            React.createElement(Legend, null),
            generateChartElements())));
}
