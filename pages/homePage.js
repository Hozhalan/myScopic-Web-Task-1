
const { homePageLocators } = require("../locators/homePage-locators");

class HomePage {
    constructor(page) {
        this.page = page;
        this.burgerMenuButton = homePageLocators.burgerMenuButton;
        this.logoutLink = homePageLocators.logoutLink;
    }

    async logout() {
        await this.page.click(this.burgerMenuButton);
        await this.page.click(this.logoutLink);
    }
}

module.exports = { HomePage };
