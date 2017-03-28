import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import {monsters} from './monsters/monsters.constants';
import {monstersService} from './monsters/monsters.service';

import {app} from './layout/app.component';
import {monsterList} from './monster-list/monster-list.component';
import {monsterDetail} from './monster-detail/monster-detail.component';
import {appState, monsterListState, monsterDetailState} from './app.states';
import {otherwiseConfigBlock, html5ModeConfigBlock} from './app.config';

const appModule = angular.module('appModule', [uiRouter]);

appModule.constant('Monsters', monsters);
appModule.factory('monstersService', monstersService);

appModule.component('app', app);
appModule.component('monsterList', monsterList);
appModule.component('monsterDetail', monsterDetail);


appModule.config(['$stateProvider', $stateProvider => {
    $stateProvider.state(appState);
    $stateProvider.state(monsterListState);
    $stateProvider.state(monsterDetailState);
}]);

appModule.config(otherwiseConfigBlock);
appModule.config(html5ModeConfigBlock);
