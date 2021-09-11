import assert from 'assert';
import CreateNewListScreen from '../screenObjects/CreateNewListScreen';
import MyListsScreen from '../screenObjects/MyListsScreen';

const SHOPPING = "Shopping";
const PERSONAL = "Personal";

describe('My Lists screen', () => {

    it('should display the default lists', async () => {

        assert.equal(await MyListsScreen.isElementWithTextDisplayed(SHOPPING), true,
            'Shopping list is NOT displayed.');
        assert.equal(await MyListsScreen.isElementWithTextDisplayed(PERSONAL), true,
            'Personal list is NOT displayed.');
    });

    it('should be able to create a new list', async () => {
        await MyListsScreen.click(MyListsScreen.fabBtn);

        assert.equal(await CreateNewListScreen.isElementDisplayed(CreateNewListScreen.backBtn), true,
            'The back button is NOT displayed.');
        assert.equal(await CreateNewListScreen.isElementWithTextDisplayed('Create New List'), true,
            'Create New List screen is NOT displayed.');
    });

    it('should be able to open lists', async () => {
        await MyListsScreen.click(MyListsScreen.getElementWithText(SHOPPING));

        assert.equal(await CreateNewListScreen.isElementDisplayed(CreateNewListScreen.backBtn), true,
            'The back button is NOT displayed.');
        assert.equal(await CreateNewListScreen.isElementWithTextDisplayed(SHOPPING), true,
            SHOPPING + ' List screen is NOT displayed.');
    });

});