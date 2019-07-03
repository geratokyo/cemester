"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Content_1 = require("../../Content");
exports.DivComponent = function (props) {
    var item = props.item;
    var cls = props.className || "";
    return (React.createElement("div", { id: item.key, className: "component--" + item.key + " " + item.className + " " + cls }, (props.item.children && props.item.children.length) &&
        props.item.children.map(function (e) { return React.createElement(Content_1.Content, { key: e.key, item: e, cmsOptions: props.cmsOptions }); })));
};
//# sourceMappingURL=DivComponent.js.map