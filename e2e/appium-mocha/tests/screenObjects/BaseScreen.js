export default class BaseScreen {

    WAIT = 1500;

    get backBtn() { return $('~Navigate up'); }

    async click(element) {
        await element.waitForDisplayed({
            timeout: this.WAIT,
        });
        await element.click();
    }

    async fillWithData(element, data) {
        await element.waitForDisplayed({
            timeout: this.WAIT,
        });
        await element.setValue(data);
    }

    async readFrom(element) {
        return await element.getText();
    }

    getElementWithText(text) {
        return $('//*[@text="' + text + '"]');
    }

    async isElementDisplayed(element) {
        try {
            await element.waitForDisplayed({
                timeout: this.WAIT,
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    async isElementWithTextDisplayed(text) {
        const elementWithText = this.getElementWithText(text);

        return await this.isElementDisplayed(elementWithText);
    }

}