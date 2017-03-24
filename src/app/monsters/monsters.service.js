export function monstersService (Monsters) {
    const publicApi = {
        getById: getById
    }

    function getById (monsterId) {
        let match;
        Monsters.forEach((monster) => {
            if (monsterId == monster.id) {
                match = monster;
            }
        })
        return match;
    }

    return publicApi;
}
