import {monstersService} from './monsters/monsters.service';

export const appState = {
    name: 'app',
    redirectTo: 'monsterList',
    component: 'layout',
    transclude: true
};

export const monsterListState = {
    name: 'monsterList',
    parent: 'app',
    url: '/monsters',
    component: 'monsterList',
    transclude: true
};

export const monsterDetailState = {
    name: 'monsterDetail',
    parent: 'monsterList',
    url: '/:monsterId',
    component: 'monsterDetail',
    resolve: {
        monster: ['$transition$', 'monstersService', function ($transition$, monstersService) {
            return monstersService.getById($transition$.params().monsterId);
        }]
    }
};
