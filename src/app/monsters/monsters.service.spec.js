describe('monstersService', () => {

    let monstersService, monstersMock, monsterOne, monsterTwo;

    beforeEach(() => {

        // Mock monsters constants
        const monsterOne = {
            id: 456,
            name: 'four five six'
        };
        const monsterTwo = {
            id: 789,
            name: 'seven eight nine'
        };
        monstersMock = [monsterOne, monsterTwo];


    });

    beforeEach(angular.mock.module('monstersModule'));

    beforeEach(inject(function(_monstersService_) {
        monstersService = _monstersService_;
    }));


    describe('getById', () => {

        it('should return the monster with the matching id', () => {
            let result = monstersService.getById(789);
            expect(result).toBe(monsterTwo);
        });

    });

});
