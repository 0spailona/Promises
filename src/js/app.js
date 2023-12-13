import GameSavingLoader from "./GameSavingLoader";

const member = new GameSavingLoader()
member.load().then(saving => {
    console.log(`Загружен объект ${saving}`)
})
    .catch(error => console.log(error))


