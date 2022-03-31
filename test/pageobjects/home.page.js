const Page = require('./page');

class HomePage extends Page {

    get elementsTile() {
        return $("//h5[contains(text(),'Elements')]/..");
    }
    get alertTile() {
        return $("//h5[contains(text(),'Alerts, Frame & Windows')]/..");
    }

    open() {
        return super.open('/');
    }
}

module.exports = new HomePage();
