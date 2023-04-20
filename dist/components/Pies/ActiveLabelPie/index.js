import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import defaultValues from "../../../common/default";
export default function ActiveLabelPieChart(props) {
    var _a = useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var width = props.width, height = props.height, dataSource = props.dataSource, outerRadius = props.outerRadius, innerRadius = props.innerRadius;
    function onPieEnter(_, index) {
        setActiveIndex(index);
    }
    function renderActiveShape(props) {
        var RADIAN = Math.PI / 180;
        var cx = props.cx, cy = props.cy, midAngle = props.midAngle, innerRadius = props.innerRadius, outerRadius = props.outerRadius, startAngle = props.startAngle, endAngle = props.endAngle, fill = props.fill, payload = props.payload, percent = props.percent, value = props.value;
        var sin = Math.sin(-RADIAN * midAngle);
        var cos = Math.cos(-RADIAN * midAngle);
        var sx = cx + (outerRadius + 10) * cos;
        var sy = cy + (outerRadius + 10) * sin;
        var mx = cx + (outerRadius + 30) * cos;
        var my = cy + (outerRadius + 30) * sin;
        var ex = mx + (cos >= 0 ? 1 : -1) * 22;
        var ey = my;
        var textAnchor = cos >= 0 ? "start" : "end";
        return (React.createElement(React.Fragment, null,
            React.createElement("text", { x: cx, y: cy, dy: 8, textAnchor: "middle", fill: fill }, payload.title),
            React.createElement(Sector, { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle, fill: fill }),
            React.createElement(Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill: fill }),
            React.createElement("path", { d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey), stroke: fill, fill: "none" }),
            React.createElement("circle", { cx: ex, cy: ey, r: 2, fill: fill, stroke: "none" }),
            React.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: "#333" }, "".concat(value)),
            React.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: "#999" }, "(Rate ".concat((percent * 100).toFixed(2), "%)"))));
    }
    return (React.createElement(ResponsiveContainer, { width: width ? width : defaultValues.width, height: height ? height : defaultValues.height },
        React.createElement(PieChart, null,
            React.createElement(Pie, { activeIndex: activeIndex, activeShape: renderActiveShape, data: dataSource.data, cx: "50%", cy: "50%", innerRadius: innerRadius ? innerRadius : defaultValues.innerRadius, outerRadius: outerRadius ? outerRadius : defaultValues.outerRadius, fill: "#8884d8", dataKey: "value", onMouseEnter: onPieEnter }))));
}
