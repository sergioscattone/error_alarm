"use strict";
exports.__esModule = true;
var Alarmer_1 = require("./../library/Alarmer");
var errorLevels_1 = require("./../constants/errorLevels");
var Logger = /** @class */ (function () {
    function Logger() {
        this._errorStack = [];
    }
    Logger.prototype.logError = function (error) {
        var stackLimit = 10;
        this._errorStack.push(error);
        if (this._errorStack.length > stackLimit) {
            this._errorStack.shift();
        }
        this.logInFile(error);
        var timeToCompare = new Date();
        timeToCompare.setMinutes(timeToCompare.getMinutes() - 1);
        if (this._errorStack.length == stackLimit &&
            this._errorStack[0].getTime() > timeToCompare) {
            Alarmer_1["default"].alertError(this._errorStack);
        }
    };
    Logger.prototype.logInFile = function (error) {
        var fs = require('fs');
        var levelName = Object.keys(errorLevels_1["default"]).find(function (key) { return errorLevels_1["default"][key] === error.getLevel(); });
        var file = "logs/" + levelName + ".log";
        fs.appendFile(file, error.getMessage() + "\n", function (err) {
            if (err) {
                console.log("error saving the file");
                console.log(err);
            }
            ;
        });
    };
    return Logger;
}());
exports["default"] = Logger;
