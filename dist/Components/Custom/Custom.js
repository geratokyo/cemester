"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CustomComponentService_1 = require("../../CustomComponentService");
exports.Custom = function (props) {
    var item = props.item;
    var cls = props.className || "";
    return (React.createElement("div", { className: cls + " " + item.className }, props.cmsOptions.isInView && CustomComponentService_1.default.getCustomComponent(props.item)));
};
//# sourceMappingURL=Custom.js.map