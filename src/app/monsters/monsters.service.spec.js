import monstersService from './monsters.service';

describe('monstersService', () => {

    let monstersMock;

    beforeEach(() => {
        const monsterOne = { id: 456, name: 'four five six'};
        const monsterTwo = { id: 789, name: 'seven eight nine'};
        monstersMock = [monsterOne, monsterTwo];
    });

    describe('getById', () => {

        it('should return the monster with the matching id', () => {
            let result = monstersService.getById(789);
            expect(result).toBe(monsterTwo);
        });

    });

});
