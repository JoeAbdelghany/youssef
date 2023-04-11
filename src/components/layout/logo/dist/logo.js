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
var link_1 = require("next/link");
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        var title = this.props.title;
        return (React.createElement(link_1["default"], { href: "/", className: "logo flex items-center" },
            React.createElement("img", { src: "/assets/images/logo/favicon-logo.png", className: "bg-mc", alt: title }),
            React.createElement("h1", null, title)));
    };
    return Logo;
}(react_1.Component));
;
exports["default"] = Logo;
