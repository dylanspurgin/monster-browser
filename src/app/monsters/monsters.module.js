import * as angular from 'angular';
import {monsters} from './monsters.constants';
import {monstersService} from './monsters.service';

export const monstersModule = angular.module('monstersModule', [])
    .constant('Monsters', monsters)
    .factory('monstersService', monstersService);
