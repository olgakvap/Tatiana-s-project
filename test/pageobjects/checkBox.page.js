const Page = require('./page');

class CheckBoxPage extends Page {

    get btnPlus() {
        return $(".rct-icon-expand-all");
    }

    get checkBoxAngular() {
        return $("//label[@for='tree-node-angular']/span[@class='rct-checkbox']");
    }

    get checkBoxTitle() {
        return $(".main-header");
    }

    get displayResult() {
        return $("#result .text-success");
    }

        open() {
        return super.open('/');
    }
}

module.exports = new CheckBoxPage();
