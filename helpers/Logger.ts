import ErrorRotunda from './../libraries/ErrorRotunda';
import Alarmer from './../libraries/Alarmer';
import errorLevels from './../constants/errorLevels';

class Logger {
    private _errorStack: ErrorRotunda[] = [];

    public logError(error: ErrorRotunda) {
        const stackLimit = 10;
        this._errorStack.push(error);
        if (this._errorStack.length > stackLimit) {
            this._errorStack.shift();
        }
        this.logInFile(error);
        const timeToCompare = new Date();
        timeToCompare.setMinutes( timeToCompare.getMinutes() - 1 );
        if (this._errorStack.length == stackLimit &&
            this._errorStack[0].getTime() > timeToCompare) {
            Alarmer.alertError(this._errorStack);
        }
    }

    private logInFile(error: ErrorRotunda) {
        const fs = require('fs');
        const levelName = Object.keys(errorLevels).find(key => errorLevels[key] === error.getLevel()); 
        const file = `logs/${levelName}.log`;
        fs.appendFile(file, error.getMessage() + "\n", (err) => {
            if (err) {
                console.log("error saving the file");
                console.log(err);
            };
        });
    }
}
export default Logger;