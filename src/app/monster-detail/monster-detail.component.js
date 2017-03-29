const template = require('./monster-detail.html');
require('./_monster-detail.scss');

function MonsterDetailController () {
    // no op
}

export const monsterDetail = {
    controller: MonsterDetailController,
    bindings: {
        monster: '<'
    },
    templateUrl: template
};
