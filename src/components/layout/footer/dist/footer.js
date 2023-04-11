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
var logo_1 = require("../logo/logo");
var link_1 = require("next/link");
var socialMedia_1 = require("../socialMedia/socialMedia");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, title = _a.title, accounts = _a.accounts;
        return (React.createElement("footer", { className: "w-full bg-lc pt-32" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "content flex justify-between mb-20" },
                    React.createElement("div", { className: "grid gap-y-4 w-80" },
                        React.createElement(logo_1["default"], { title: title }),
                        React.createElement("p", { className: "w-full desc" }, "I love the intenet so much do you like it linke me you he she it any thing words letters &&  I realy need 6 words more then it"),
                        React.createElement(socialMedia_1["default"], { accounts: accounts })),
                    React.createElement("div", { className: "navItems flex gap-x-32" },
                        React.createElement("div", { className: "navItem" },
                            React.createElement("h2", null, "get help"),
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/help/faq" }, "FAQs")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/help" }, "help & support")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/fetures" }, "fetures")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/contact" }, "contact")))),
                        React.createElement("div", { className: "navItem" },
                            React.createElement("h2", null, "about us"),
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/help/faq" }, "FAQs")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/about" }, "about us")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/fetures" }, "fetures")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/contact" }, "contact")))),
                        React.createElement("div", { className: "navItem" },
                            React.createElement("h2", null, "projects"),
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/help/faq" }, "home")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/about" }, "about")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/fetures" }, "projects")),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "/contact" }, "contact")))))),
                React.createElement("div", { className: "end py-4 flex justify-between items-center" },
                    React.createElement("div", { className: "copyWrite tcl" }, "\u00A9 youssef. All rights reserved"),
                    React.createElement("ul", { className: "pages flex gap-x-4" },
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "/", className: "mch capitalize" }, "home")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "/about", className: "mch capitalize" }, "about")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "/projects", className: "mch capitalize" }, "projects")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "/contact", className: "mch capitalize" }, "contact")))))));
    };
    return Footer;
}(react_1.Component));
exports["default"] = Footer;
