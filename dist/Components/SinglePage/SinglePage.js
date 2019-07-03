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
var SpringScroll_1 = require("../SpringScroll/SpringScroll");
var Section_1 = require("../Section/Section");
var SinglePage = (function (_super) {
    __extends(SinglePage, _super);
    function SinglePage(p) {
        var _this = _super.call(this, p) || this;
        _this.elements = {};
        _this.scrollToSection = function (sectionKey) {
            _this.scroll(_this.elements[sectionKey].getHtmlElement());
        };
        _this.scroll = function (ref) {
            var offset = _this.getOffset(ref).top;
            _this.scrollEl.scrollTop(offset);
        };
        _this.getOffset = function (el) {
            var rect = el.getBoundingClientRect();
            return {
                top: rect.top + _this.scrollEl.getScrollTop()
            };
        };
        _this.handleScroll = function (e) {
            _this.checkTopNavBar(e);
            _this.setState({
                offset: e.scrollTop
            });
        };
        _this.checkTopNavBar = function (offset) {
            var topElOffset = Math.abs(_this.topEl.getBoundingClientRect().top);
            _this.setState({
                isNavFixed: topElOffset > (_this.windowHeight * 0.5)
            });
        };
        _this.state = {
            isNavFixed: false,
            offset: 0
        };
        return _this;
    }
    SinglePage.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            var url = exports.GET_URL(_this.props.url);
            if (url !== "" && _this.elements[url]) {
                _this.scrollToSection(url);
            }
        }, 1400);
        this.windowHeight = window.innerHeight;
    };
    SinglePage.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state, cls = this.props.className || "";
        return (React.createElement("div", { className: "sp " + cls, ref: function (e) { return _this.el = e; } },
            (state.isNavFixed && props.header) &&
                React.createElement("div", { className: "sp__nav sp__nav--static", style: { position: "absolute", width: "100%", height: "auto", zIndex: 9999 } }, React.Children.map(this.props.header, function (child) {
                    return React.cloneElement(child, __assign({}, child.props, { scrollTo: _this.scrollToSection }));
                })[0]),
            React.createElement(SpringScroll_1.SpringScroll, { ref: function (e) { return _this.scrollEl = e; }, className: "sp__spring-scroll", style: {
                    height: "100vh"
                }, onScrollFrame: this.handleScroll },
                (!state.isNavFixed && props.header) &&
                    React.createElement("div", { className: "sp__nav" }, React.Children.map(this.props.header, function (child) {
                        return React.cloneElement(child, __assign({}, child.props, { scrollTo: _this.scrollToSection }));
                    })[0]),
                React.createElement("div", { className: "sp__content", ref: function (e) { return _this.topEl = e; } }, props.content.map(function (e) { return React.createElement(Section_1.Section, { ref: function (ee) { _this.elements[e.key] = ee; }, key: e.key, offset: state.offset, item: e, screenThreshold: _this.props.screenThreshold }); })))));
    };
    return SinglePage;
}(React.Component));
exports.SinglePage = SinglePage;
exports.GET_URL = function (url) {
    if (typeof url === "string") {
        return url;
    }
    else if (typeof url === "function") {
        return url();
    }
};
//# sourceMappingURL=SinglePage.js.map