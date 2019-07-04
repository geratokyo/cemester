"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Components = require("./Components");
var CustomComponentService_1 = require("./CustomComponentService");
exports.Content = function (props) {
    var item = props.item;
    var C = Components[item.type];
    var K = CustomComponentService_1.default.getCustomComponent(item);
    if (!C && !K) {
        console.error("Component with name \"" + item.type + "\" was not found, check your type names in the customComponents prop function");
        return null;
    }
    return React.createElement(React.Fragment, null, C ? React.createElement(C, __assign({}, props)) : K);
};
//# sourceMappingURL=Content.js.map