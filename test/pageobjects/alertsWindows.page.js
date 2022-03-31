const Page = require('./page');

class AlertsWindowsPage extends Page {

    get checkBoxMenu() {
        return $("//span[text()='Check Box']/..");
    }

    get alertsTitle() {
        return $(".main-header");
    }

    open() {
        return super.open('/');
    }
}

module.exports = new AlertsWindowsPage();
