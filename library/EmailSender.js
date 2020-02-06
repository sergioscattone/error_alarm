"use strict";
exports.__esModule = true;
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.sendEmail = function (message) {
        // get smtp config
        // find and fill the email template
        // actually send the email
        console.log("-- EmailSender Called -- Message:  " + message);
    };
    return EmailSender;
}());
exports["default"] = EmailSender;
