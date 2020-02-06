import errorLevel from './../constants/errorLevels';

class ErrorRotunda {
    private _message: string;
    private _level: number;
    private _time: Date;

    constructor(message: string, level: number) {
        this._message = message;
        this._level = level || errorLevel.FATAL;
        this._time = new Date();
    }

    getMessage(): string {
        return this._message;
    }

    getLevel(): number {
        return this._level;
    }

    getTime(): Date {
        return this._time;
    }
}
export default ErrorRotunda;
