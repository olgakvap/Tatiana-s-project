const Page = require('./page');

class HomePage extends Page {

    get elementsTile() {
        return $("//h5[contains(text(),'Elements')]/..");
    }

    open() {
        return super.open('/');
    }
}

module.exports = new HomePage();
