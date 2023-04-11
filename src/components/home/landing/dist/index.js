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
var io5_1 = require("react-icons/io5");
var style_module_scss_1 = require("@/styles/home/landing/style.module.scss");
var socialMedia_1 = require("@/components/layout/socialMedia/socialMedia");
var Landing = /** @class */ (function (_super) {
    __extends(Landing, _super);
    function Landing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Landing.prototype.render = function () {
        var user = this.props.user;
        var name = user.name, social = user.social, job = user.job, describtion = user.describtion;
        var title = name.title;
        var jobTitles = job.jobTitles;
        var accounts = social.accounts;
        return (React.createElement("section", { className: style_module_scss_1["default"].landing + " p-0" },
            React.createElement("div", { className: style_module_scss_1["default"].container + " container h-full grid items-center grid-cols-2 relative" },
                React.createElement("div", { className: style_module_scss_1["default"].landingContent + " justify-self-end w-fit" },
                    React.createElement("h1", { className: "title" },
                        "HI Iam ",
                        React.createElement("span", { className: "text-mc" },
                            title,
                            " "),
                        "!"),
                    React.createElement("div", { className: style_module_scss_1["default"].jobTitles + " overflow-hidden flex gap-x-4" },
                        React.createElement("span", null, "Iam a"),
                        React.createElement("ul", { className: style_module_scss_1["default"].jobTitlesList + " pr-2 h-20" }, jobTitles.map(function (jobTitle) { return (React.createElement("li", { className: style_module_scss_1["default"].jobTitle + " overflow-hidden text-smc relative h-full flex justify-content-start whitespace-nowrap" },
                            " ",
                            jobTitle,
                            " ")); }))),
                    React.createElement("p", { className: "" + style_module_scss_1["default"].desc }, describtion),
                    React.createElement("button", { type: "button", className: "btn fill gap-3" },
                        "Hire me ",
                        React.createElement(io5_1.IoSendOutline, { className: "icon -rotate-45" }))),
                React.createElement("div", { className: style_module_scss_1["default"].landingImage + " justify-self-center" }),
                React.createElement("div", { className: style_module_scss_1["default"].landingSocial + " absolute right-0 bottom-8" },
                    React.createElement(socialMedia_1["default"], { accounts: accounts })))));
    };
    return Landing;
}(react_1.Component));
exports["default"] = Landing;
