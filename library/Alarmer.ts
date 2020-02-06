import ErrorRotunda from "./ErrorRotunda";
import EmailSender from "./EmailSender";

class Alarmer {
    private static _lastAlarm: Date;

    public static alertError(errors: ErrorRotunda[]) {
        console.log('-- Alert Library Called --');
        const timeToCompare = new Date();
        timeToCompare.setMinutes( timeToCompare.getMinutes() - 1 );
        if (!this._lastAlarm || timeToCompare > this._lastAlarm) {
            const emailSender: EmailSender = new EmailSender();
            const emailMessage: string = errors.map(t => t.getMessage()).join(' - ');
            emailSender.sendEmail(emailMessage);
            this._lastAlarm = new Date();
        }
    }
}
export default Alarmer;