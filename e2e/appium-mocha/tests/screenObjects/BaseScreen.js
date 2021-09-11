export default class BaseScreen {

    get backBtn() { return $('~Navigate up'); }

    async click(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    async fillWithData(element, data) {
        await element.waitForDisplayed();
        await element.setValue(data);
    }

    async readFrom(element) {
        await element.waitForDisplayed();
        
        return await element.getText();
    }

    getElementWithText(text) {
        return $('//*[@text="' + text + '"]');
    }

    async isElementDisplayed(element) {
        try {
            await element.waitForDisplayed();
        } catch (error) {
            return false;
        }

        return true;
    }

    async isElementWithTextDisplayed(text) {
        const elementWithText = this.getElementWithText(text);

        return await this.isElementDisplayed(elementWithText);
    }

}