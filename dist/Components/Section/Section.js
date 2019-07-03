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
var models_1 = require("../../models");
var Content_1 = require("../../Content");
var Section = (function (_super) {
    __extends(Section, _super);
    function Section(p) {
        var _this = _super.call(this, p) || this;
        _this.isInView = function () {
            var cc = _this.el.getBoundingClientRect();
            var heightSplit = window.innerHeight * _this.props.screenThreshold;
            return cc.top >= 0 && cc.top < heightSplit;
        };
        _this.shouldShowChildren = function () {
            return _this.props.item.children && _this.props.item.children.length;
        };
        _this.getHtmlElement = function () {
            return _this.el;
        };
        _this.state = {
            isInView: false,
            isAnimated: false
        };
        return _this;
    }
    Section.prototype.componentDidMount = function () {
        this.setState({
            isInView: this.isInView()
        });
    };
    Section.prototype.componentDidUpdate = function (prevProps, prevState) {
        var isVisible = this.isInView();
        if (prevProps.offset !== this.props.offset) {
            this.setState({
                isInView: isVisible
            });
        }
        if (!prevState.isInView && this.state.isInView) {
            this.setState({
                isAnimated: true
            });
        }
    };
    Section.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (nextState.isAnimated) {
            return false;
        }
        return true;
    };
    Section.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state;
        var itemClass = props.item.className || "";
        return (React.createElement("section", { ref: function (e) { return _this.el = e; }, className: "" + itemClass }, this.shouldShowChildren() &&
            props.item.children.map(function (e) { return React.createElement(Content_1.Content, { key: e.key, offset: props.offset, cmsOptions: __assign({}, props, { isInView: state.isAnimated || state.isInView }), item: e }); })));
    };
    Section.defaultProps = {
        screenThreshold: models_1.DEFAULTS.SCREEN_THRESHOLD
    };
    return Section;
}(React.Component));
exports.Section = Section;
//# sourceMappingURL=Section.js.map