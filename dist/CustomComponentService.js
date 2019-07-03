"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomComponentService = (function () {
    function CustomComponentService() {
        var _this = this;
        this.getCustomComponent = function (item) {
            return _this.customComponent(item);
        };
        this.getCustomComponentFn = function () { return _this.customComponent; };
        this.setCustomComponentFn = function (cb) {
            _this.customComponent = cb;
        };
    }
    return CustomComponentService;
}());
exports.default = new CustomComponentService();
//# sourceMappingURL=CustomComponentService.js.map