import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
    load() {
        return read()
            .then(x => json(x))
            .then(x => {
                return new GameSaving(JSON.parse(x));
            });
    }
}

