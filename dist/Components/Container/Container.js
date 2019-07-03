"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Content_1 = require("../../Content");
exports.Container = function (props) {
    var cls = props.className || "";
    var itemCls = props.item.className || "container";
    return (React.createElement("div", { className: itemCls + " " + cls },
        React.createElement("div", { className: "row" }, (props.item.children && props.item.children.length) &&
            props.item.children.map(function (e) { return React.createElement(Content_1.Content, { key: e.key, cmsOptions: props.cmsOptions, item: e }); }))));
};
//# sourceMappingURL=Container.js.map