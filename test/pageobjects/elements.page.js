const Page = require('./page');

class ElementsPage extends Page {

    get checkBoxMenu() {
        return $("//span[text()='Check Box']/..");
    }

    get elementsTitle() {
        return $(".main-header");
    }

    open() {
        return super.open('/');
    }
}

module.exports = new ElementsPage();
