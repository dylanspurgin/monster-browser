
export const appState = {
    name: 'app',
    redirectTo: 'monsterList',
    component: 'app'
};

export const monsterListState = {
    name: 'monsterList',
    parent: 'app',
    url: '/monsters',
    component: 'monsterList'
};

export const monsterDetailState = {
    name: 'monsterDetail',
    parent: 'monsterList',
    url: '/:monsterId',
    component: 'monsterDetail',
    resolve: {
        monster: ($transition$, monstersService) => {
            return monstersService.getById($transition$.params().monsterId);
        }
    }
};