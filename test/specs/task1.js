const HomePage = require('../pageobjects/home.page');
const ElementsPage = require('../pageobjects/elements.page');
const CheckBoxPage = require('../pageobjects/checkBox.page');

describe('CheckBox Angular verification', () => {
    before('Maximize window',  async () => {
        await browser.maximizeWindow();
    });

    it('Should verify Angular checkBox', async () => {
        await HomePage.open();
        await HomePage.elementsTile.scrollIntoView();
        await HomePage.elementsTile.click();
        await expect(ElementsPage.elementsTitle.toHaveText('Elements'));
        await ElementsPage.checkBoxMenu.scrollIntoView();
        await ElementsPage.checkBoxMenu.click();
        await expect(CheckBoxPage.checkBoxTitle.toHaveText('Check Box'));
        await CheckBoxPage.btnPlus.click();
        await expect(CheckBoxPage.checkBoxAngular.toBeDisplayed());
        await CheckBoxPage.checkBoxAngular.scrollIntoView();
        await CheckBoxPage.checkBoxAngular.click();
        const text = await CheckBoxPage.displayResult.getText();
        await expect(text).toEqual('angular');
        await CheckBoxPage.checkBoxAngular.click();
        await expect(CheckBoxPage.checkBoxAngular).not.toBeChecked();
    });
});