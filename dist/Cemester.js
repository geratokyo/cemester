"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var models_1 = require("./models");
var Components = require("./Components");
var CustomComponentService_1 = require("./CustomComponentService");
var Cemester = (function (_super) {
    __extends(Cemester, _super);
    function Cemester(p) {
        var _this = _super.call(this, p) || this;
        CustomComponentService_1.default.setCustomComponentFn(p.customComponents);
        return _this;
    }
    Cemester.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        var C = Components[props.content[0].type];
        return React.createElement(C, __assign({}, props, { content: props.content[0].children }));
    };
    Cemester.defaultProps = {
        screenThreshold: models_1.DEFAULTS.SCREEN_THRESHOLD
    };
    return Cemester;
}(React.Component));
exports.Cemester = Cemester;
//# sourceMappingURL=Cemester.js.map