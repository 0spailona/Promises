import GameSavingLoader from "../GameSavingLoader";
import User from "../user";
import GameSaving from "../GameSaving";

test('should return correct data', async() => {
    const newSaveData = new GameSavingLoader();
    const result = await newSaveData.load();
    const user = new User(1,'Hitman',10,2000);
    const correct = new GameSaving({id: 9, created: 1546300800, userInfo: user});
    expect(result).toEqual(correct);
})
