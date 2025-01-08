const { loginPageLocators } = require("../locators/loginPage-locators");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = loginPageLocators.usernameInput;
        this.passwordInput = loginPageLocators.passwordInput;
        this.loginButton = loginPageLocators.loginButton;
        this.errorMessage = loginPageLocators.errorMessage;
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return this.page.textContent(this.errorMessage);
    }
}

module.exports = { LoginPage };