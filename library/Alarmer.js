"use strict";
exports.__esModule = true;
var EmailSender_1 = require("./EmailSender");
var Alarmer = /** @class */ (function () {
    function Alarmer() {
    }
    Alarmer.alertError = function (errors) {
        console.log('-- Alert Library Called --');
        var timeToCompare = new Date();
        timeToCompare.setMinutes(timeToCompare.getMinutes() - 1);
        if (!this._lastAlarm || timeToCompare > this._lastAlarm) {
            var emailSender = new EmailSender_1["default"]();
            var emailMessage = errors.map(function (t) { return t.getMessage(); }).join(' - ');
            emailSender.sendEmail(emailMessage);
            this._lastAlarm = new Date();
        }
    };
    return Alarmer;
}());
exports["default"] = Alarmer;
