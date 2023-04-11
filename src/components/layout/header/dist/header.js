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
var logo_1 = require("../logo/logo");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var title = this.props.title;
        if (process.browser) {
            window.addEventListener('scroll', function () {
                var header = document.querySelector('header');
                window.scrollY === 0 ? header.classList.remove('shadow') : header.classList.add('shadow');
            });
            // const router = useRouter();
            var links = Array.from(document.querySelectorAll('a'));
            links.map(function (ele) {
                if (ele.href == location.href) {
                    ele.classList.add('active');
                }
                else {
                    ele.classList.remove('active');
                }
            });
        }
        return (React.createElement("header", { className: "fixed top-0 left-0 w-full bg-lc" },
            React.createElement("div", { className: "container flex justify-between items-center h-full" },
                React.createElement(logo_1["default"], { title: title }),
                React.createElement("ul", { className: "flex" },
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/" }, "home")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/about" }, "about")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/projects" }, "projects")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/contact" }, "contact")),
                    React.createElement("li", null,
                        React.createElement(link_1["default"], { href: "/posts" }, "posts"))),
                React.createElement("div", { className: "flex items-center btns" },
                    React.createElement(link_1["default"], { href: "/login", className: "btn fill" }, "login"),
                    React.createElement("button", { className: "btn empty", type: "button" }, "sign up")))));
    };
    return Header;
}(react_1.Component));
exports["default"] = Header;
