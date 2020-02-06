import Logger from './helpers/Logger';
import ErrorRotunda from './library/ErrorRotunda';
import errorLevels from './constants/errorLevels';

const logger = new Logger();
let message, errorRotunda;

console.log("It starts, when Logs 10 times it will call the Alarmer library");
// MESSAGE
for(let i = 0; i < 3; i++) {
    message = 'Some MESSAGE Message';
    errorRotunda = new ErrorRotunda(message, errorLevels.MESSAGE);
    logger.logError(errorRotunda);
}
console.log("3 Message Level Logs called");

// WARNING
for(let i = 0; i < 3; i++) {
    message = 'Some WARNING Message';
    errorRotunda = new ErrorRotunda(message, errorLevels.WARNING);
    logger.logError(errorRotunda);
}
console.log("3 Warning Level Logs called");

// APP_ERROR
for(let i = 0; i < 3; i++) {
    message = 'Some APP_ERROR Message';
    errorRotunda = new ErrorRotunda(message, errorLevels.APP_ERROR);
    logger.logError(errorRotunda);
}
console.log("3 app_error Level Logs called");

// BD_ERROR
for(let i = 0; i < 3; i++) {
    message = 'Some BD_ERROR Message';
    errorRotunda = new ErrorRotunda(message, errorLevels.BD_ERROR);
    logger.logError(errorRotunda);
}
console.log("3 db_error Level Logs called, should had called 3 times the alarmer and send the email just one time");

// FATAL
for(let i = 0; i < 3; i++) {
    message = 'Some FATAL Message';
    errorRotunda = new ErrorRotunda(message, errorLevels.FATAL);
    logger.logError(errorRotunda);
}
console.log("3 fatal Level Logs called, should had called 3 more times the alarmer but no times the email sender");

console.log("Now it will delay a minute to test the re-send of the email, by the generation of 10 message level logs");
// WAIT A MINUTE TO TEST EMAIL SEND
setTimeout(function(){
    for(let i = 0; i < 10; i++) {
        message = 'LAST EMAIL SENT';
        errorRotunda = new ErrorRotunda(message, errorLevels.MESSAGE);
        logger.logError(errorRotunda);
    }
}, 60 * 1000);
