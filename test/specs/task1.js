const HomePage = require('../pageobjects/home.page');
const ElementsPage = require('../pageobjects/elements.page');
const CheckBoxPage = require('../pageobjects/checkBox.page');

describe('CheckBox Angular verification', () => {
    it('should Select “Elements” tile', async () => {
        await HomePage.open();
        await browser.maximizeWindow();
        await HomePage.elementsTile.scrollIntoView();
        await HomePage.elementsTile.click();
        await expect(ElementsPage.elementsTitle.toHaveText('Elements'));
    });

    it('should select the “Check Box”', async () => {
        await ElementsPage.checkBoxMenu.scrollIntoView();
        await ElementsPage.checkBoxMenu.click();
        await expect(CheckBoxPage.checkBoxTitle.toHaveText('Check Box'));
    });
    it('should expand the folder tree using the “+” button”', async () => {
        await CheckBoxPage.btnPlus.click();
        await expect(CheckBoxPage.checkBoxAngular.toBeDisplayed());
    });

    it('should select the checkbox “Angular” ', async () => {
        await CheckBoxPage.checkBoxAngular.scrollIntoView();
        await CheckBoxPage.checkBoxAngular.click();
        const text = await CheckBoxPage.displayResult.getText();
        await expect(text).toEqual('angular');
    });

    it('should Uncheck the checkbox “Angular” ', async () => {
        await CheckBoxPage.checkBoxAngular.click();
        await expect(CheckBoxPage.checkBoxAngular).not.toBeChecked();
    });

});

