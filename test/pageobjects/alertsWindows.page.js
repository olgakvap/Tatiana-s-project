const Page = require('./page');

class AlertsWindowsPage extends Page {

    get alertsTitle() {
        return $(".main-header");
    }
    get alertsMenu() {
        return $("//span[text()='Alerts']/..");
    }
    open() {
        return super.open('/');
    }
}

module.exports = new AlertsWindowsPage();
