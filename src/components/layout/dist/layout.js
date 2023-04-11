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
exports.__esModule = true;
var react_1 = require("react");
var header_1 = require("./header/header");
var main_1 = require("./main/main");
var footer_1 = require("./footer/footer");
var scrollBtn_1 = require("./scrollBtn/scrollBtn");
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        var _a = this.props, data = _a.data, children = _a.children;
        var user = data.user, title = data.title;
        var social = user.social;
        var accounts = social.accounts;
        return (React.createElement(React.Fragment, null,
            React.createElement(header_1["default"], { title: title }),
            React.createElement(main_1["default"], null, children),
            React.createElement(scrollBtn_1["default"], null),
            React.createElement(footer_1["default"], { title: title, accounts: accounts })));
    };
    return Layout;
}(react_1.Component));
exports["default"] = Layout;
