const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');

test.describe('Login and Logout Tests', () => {
    let loginPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.navigate();
    });

    test('Standard User Login and Logout', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory\.html/);

        await homePage.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Locked Out User Login', async () => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Sorry, this user has been locked out.');
    });

    test('Invalid Login User', async () => {
        await loginPage.login('invalid_user', 'wrong_password');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Username and password do not match any user in this service');
    });
});
