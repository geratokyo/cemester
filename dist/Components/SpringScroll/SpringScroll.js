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
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var Rebound = require("rebound");
var SpringScroll = (function (_super) {
    __extends(SpringScroll, _super);
    function SpringScroll(props) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, [props].concat(rest)) || this;
        _this.handleSpringUpdate = _this.handleSpringUpdate.bind(_this);
        return _this;
    }
    SpringScroll.prototype.componentDidMount = function () {
        this.springSystem = new Rebound.SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    };
    SpringScroll.prototype.componentWillUnmount = function () {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    };
    SpringScroll.prototype.getScrollTop = function () {
        return this.refs.scrollbars.getScrollTop();
    };
    SpringScroll.prototype.getScrollHeight = function () {
        return this.refs.scrollbars.getScrollHeight();
    };
    SpringScroll.prototype.scrollTop = function (top) {
        var scrollbars = this.refs.scrollbars;
        top -= 70;
        var scrollTop = scrollbars.getScrollTop();
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(top);
    };
    SpringScroll.prototype.handleSpringUpdate = function (spring) {
        var scrollbars = this.refs.scrollbars;
        var val = spring.getCurrentValue();
        scrollbars.scrollTop(val);
    };
    SpringScroll.prototype.render = function () {
        return (React.createElement(react_custom_scrollbars_1.default, __assign({}, this.props, { ref: "scrollbars" })));
    };
    return SpringScroll;
}(React.Component));
exports.SpringScroll = SpringScroll;
//# sourceMappingURL=SpringScroll.js.map