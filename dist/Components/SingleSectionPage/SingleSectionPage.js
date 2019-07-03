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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Section_1 = require("../Section/Section");
var SinglePage_1 = require("../SinglePage/SinglePage");
var lodash_keyby_1 = require("lodash.keyby");
var SingleSectionPage = (function (_super) {
    __extends(SingleSectionPage, _super);
    function SingleSectionPage(p) {
        var _this = _super.call(this, p) || this;
        var url = SinglePage_1.GET_URL(p.url);
        _this.state = {
            content: lodash_keyby_1.keyBy(p.content, "key"),
            url: url || p.content[0].key
        };
        return _this;
    }
    SingleSectionPage.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (SinglePage_1.GET_URL(prevProps.url) !== SinglePage_1.GET_URL(this.props.url)) {
            var url = SinglePage_1.GET_URL(this.props.url);
            this.setState({
                url: url || this.props.content[0].key
            });
        }
    };
    SingleSectionPage.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state;
        var section = state.content[state.url];
        return React.createElement("div", { className: "ssp" },
            props.header &&
                React.createElement("div", { className: "ssp__header" }, props.header),
            React.createElement("div", { className: "ssp__content" },
                React.createElement(Section_1.Section, { ref: function (ee) { _this.sectionEl = ee; }, key: section.key, item: section })));
    };
    return SingleSectionPage;
}(React.Component));
exports.SingleSectionPage = SingleSectionPage;
//# sourceMappingURL=SingleSectionPage.js.map