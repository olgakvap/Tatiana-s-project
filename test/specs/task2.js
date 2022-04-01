const HomePage = require('../pageobjects/home.page');
const AlertsPage = require('../pageobjects/alerts.page');
const AlertsWindowsPage = require('../pageobjects/alertsWindows.page');
const { alertIsPresent } = require('wdio-wait-for');

describe(' Verify the alert pop up has appeared', () => {
    before('Maximize window',  async () => {
        await browser.maximizeWindow();
    });

    it('Should Select “Alerts, Frame, & Windows” tile', async () => {
        await HomePage.open();
        await HomePage.alertTile.scrollIntoView();
        await HomePage.alertTile.click();
        await AlertsWindowsPage.alertsMenu.scrollIntoView();
        await AlertsWindowsPage.alertsMenu.click();
        await AlertsPage.btnTimerAlert.click();
        await browser.waitUntil(alertIsPresent(), { timeout: 6000, timeoutMsg: 'Failed, after waiting for the alert to be present' });
        let isAlertOpened = await browser.isAlertOpen();
        await expect(isAlertOpened).toEqual(true);
        let alertMessage = await browser.getAlertText();
        await expect(alertMessage).toEqual('This alert appeared after 5 seconds');
        await browser.acceptAlert();
        isAlertOpened = await browser.isAlertOpen();
        await expect(isAlertOpened).toEqual(false);
    });
});
