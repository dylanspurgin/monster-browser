const template = require('./monster-list.html');
require('./monster-list.scss');

MonsterListController.$inject = ['Monsters'];
function MonsterListController (Monsters) {
    this.monsters = Monsters;
}

export const monsterList = {
    controller: MonsterListController,
    templateUrl: template
};
