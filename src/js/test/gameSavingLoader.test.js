import GameSavingLoader from "../GameSavingLoader";

test('should return correct data', async() => {
    const newSaveData = new GameSavingLoader();
    const result = await newSaveData.load();
    expect(result).toEqual({
        "id": 9,
        "created": 1546300800,
        "userInfo": {
            "id": 1,
            "name": 'Hitman',
            "level": 10,
            "points": 2000,
        }
    })
})
