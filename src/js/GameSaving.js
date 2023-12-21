import User from "./user";
export default class GameSaving{
    constructor(data) {
        this.id = data.id;
        this.created = data.created;
        this.userInfo = new User(data.userInfo.id,data.userInfo.name,data.userInfo.level,data.userInfo.points);
    }
}