"use strict";
exports.__esModule = true;
var errorLevels_1 = require("./../constants/errorLevels");
var ErrorRotunda = /** @class */ (function () {
    function ErrorRotunda(message, level) {
        this._message = message;
        this._level = level || errorLevels_1["default"].FATAL;
        this._time = new Date();
    }
    ErrorRotunda.prototype.getMessage = function () {
        return this._message;
    };
    ErrorRotunda.prototype.getLevel = function () {
        return this._level;
    };
    ErrorRotunda.prototype.getTime = function () {
        return this._time;
    };
    return ErrorRotunda;
}());
exports["default"] = ErrorRotunda;
