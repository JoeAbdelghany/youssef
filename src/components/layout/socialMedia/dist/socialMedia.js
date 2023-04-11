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
var SocialMedia = /** @class */ (function (_super) {
    __extends(SocialMedia, _super);
    function SocialMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialMedia.prototype.render = function () {
        var _a = this.props.accounts, businessAccounts = _a.businessAccounts, personalAccounts = _a.personalAccounts;
        var facebook = businessAccounts.facebook, instagram = businessAccounts.instagram, linkedin = businessAccounts.linkedin, github = businessAccounts.github;
        return (React.createElement("ul", { className: "socialMediaIcons flex gap-4" },
            React.createElement("li", { className: "socialMediaIcon" },
                React.createElement("a", { href: facebook, className: "facebook", title: "my facebook acount", target: "_blank" },
                    React.createElement(io5_1.IoLogoFacebook, { className: "icon" }))),
            React.createElement("li", { className: "socialMediaIcon" },
                React.createElement("a", { href: instagram, className: "instagram", title: "my instagram acount", target: "_blank" },
                    React.createElement(io5_1.IoLogoInstagram, { className: "icon" }))),
            React.createElement("li", { className: "socialMediaIcon" },
                React.createElement("a", { href: linkedin, className: "linkedin", title: "my linkedin acount", target: "_blank" },
                    React.createElement(io5_1.IoLogoLinkedin, { className: "icon" }))),
            React.createElement("li", { className: "socialMediaIcon" },
                React.createElement("a", { href: github, className: "github", title: "my github acount", target: "_blank" },
                    React.createElement(io5_1.IoLogoGithub, { className: "icon" })))));
    };
    return SocialMedia;
}(react_1.Component));
exports["default"] = SocialMedia;
