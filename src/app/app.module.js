import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

require('./style/app.scss'); // Main app stylesheet

import {monsters} from './monsters/monsters.constants';
import {monstersService} from './monsters/monsters.service';

import {main} from './layout/main.component';
import {monsterList} from './monster-list/monster-list.component';
import {monsterDetail} from './monster-detail/monster-detail.component';
import {appState, monsterListState, monsterDetailState} from './app.states';
import {otherwiseConfigBlock, html5ModeConfigBlock} from './app.config';

const appModule = angular.module('appModule', [uiRouter]);

appModule.constant('Monsters', monsters);
appModule.factory('monstersService', monstersService);

appModule.component('main', main);
appModule.component('monsterList', monsterList);
appModule.component('monsterDetail', monsterDetail);


appModule.config(['$stateProvider', $stateProvider => {
    $stateProvider.state(appState);
    $stateProvider.state(monsterListState);
    $stateProvider.state(monsterDetailState);
}]);

appModule.config(otherwiseConfigBlock);
appModule.config(html5ModeConfigBlock);
