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
var image_1 = require("next/image");
var link_1 = require("next/link");
var style_module_scss_1 = require("@/styles/home/about/style.module.scss");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        var user = this.props.user;
        var story = user.story, name = user.name;
        var title = name.title;
        return (React.createElement("section", { className: "" + style_module_scss_1["default"].about },
            React.createElement("div", { className: "container" },
                React.createElement("h2", { className: "text-center pb-16" },
                    React.createElement("span", { className: "text-mc" }, "About "),
                    " me"),
                React.createElement("figure", { className: "figure grid grid-cols-2" },
                    React.createElement(image_1["default"], { src: "/assets/images/user/about.jpg", width: "350", height: "350", alt: "youssef", className: "justify-self-center rounded-xl" }),
                    React.createElement("figcaption", { className: "figcaption justify-self-center" },
                        React.createElement("h1", null,
                            "Who is ",
                            React.createElement("span", { className: "text-mc" }, title),
                            " ?"),
                        React.createElement("p", { className: "desc" }, story.short),
                        React.createElement("button", { className: "btn fill", type: "button" },
                            React.createElement(link_1["default"], { href: "/about" }, "About me")))))));
    };
    return About;
}(react_1.Component));
exports["default"] = About;
