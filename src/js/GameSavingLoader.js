import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    load() {
        return read()
            .then(x => json(x))
            .then(x => JSON.parse(x));
    }


}

