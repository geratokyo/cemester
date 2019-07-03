"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Image = function (props) {
    var resUrl = window.__RES_URL__;
    var item = props.item;
    var content = item.content;
    var cls = props.className || "";
    var animate = (props.cmsOptions.isInView && item.animation) ? item.animation : (!item.animation) ? "" : "opacify";
    return (React.createElement("img", { className: cls + " " + item.className + " " + animate, src: "" + resUrl + content.imgSrc, alt: content.altText || "" }));
};
//# sourceMappingURL=Image.js.map