const HomePage = require('../pageobjects/home.page');
const AlertsPage = require('../pageobjects/alerts.page');
const AlertsWindowsPage = require('../pageobjects/alertsWindows.page');

describe(' Verify the alert pop up has appeared', () => {
    before('Maximize window',  async () => {
        await browser.maximizeWindow();
    });

    it('Should Select “Alerts, Frame, & Windows” tile', async () => {
        await HomePage.open();
        await HomePage.alertTile.scrollIntoView();
        await HomePage.alertTile.click();
        await expect(AlertsWindowsPage.alertsTitle).toHaveText('Alerts, Frame & Windows');
    });

    it('Should Select the “Alerts” option from the side menu”', async () => {
        await AlertsWindowsPage.alertsMenu.scrollIntoView();
        await AlertsWindowsPage.alertsMenu.click();
        await expect(AlertsPage.alertsTitle.toHaveText('Alerts'));
    });

    it('Should click on the “On button click, alert will appear after 5 seconds” button ', async () => {
        await AlertsPage.btnTimerAlert.click();
        //await browser.pause(6000);
        await browser.waitUntil(
            async () => {
                let alertOpen = await browser.isAlertOpen();
                return alertOpen === true;
            },
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );


        // let alertOpen = await browser.isAlertOpen();
        // await expect(alertOpen).toEqual(true);
    });

    it('Should verify the alert pop up has appeared with expected message', async () => {
        let alertMessage = await browser.getAlertText();
        await expect(alertMessage).toEqual('This alert appeared after 5 seconds');
    });

    it('Should close the alert', async () => {
        await browser.acceptAlert();
        let alertOpen = await browser.isAlertOpen();
        await expect(alertOpen).toEqual(false);
    });
});


