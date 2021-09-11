import BaseScreen from "./BaseScreen";

class MyListsScreen extends BaseScreen {

    get fabBtn() { return $('//*[@resource-id="fabButton"]'); }

}

export default new MyListsScreen();