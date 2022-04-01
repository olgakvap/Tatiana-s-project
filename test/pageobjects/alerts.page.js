const Page = require('./page');

class AlertsPage extends Page {

    get alertsTitle() {
        return $(".main-header");
    }
    get btnTimerAlert() {
        return $("#timerAlertButton");
    }

        open() {
        return super.open('/');
    }
}

module.exports = new AlertsPage();
