"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Text = function (props) {
    var item = props.item;
    var cls = props.className || "";
    var clsA = item.className || "";
    var animate = props.cmsOptions.isInView ? item.animation : "opacify";
    if (!item.animation) {
        animate = "";
    }
    return (React.createElement("div", { className: "text " + cls + " " + clsA + " " + animate, dangerouslySetInnerHTML: { __html: item.content } }));
};
//# sourceMappingURL=Text.js.map