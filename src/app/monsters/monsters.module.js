import {monsters} from './monsters.constants';
import {monstersService} from './monsters.service';

const monstersModule = angular.module('monstersModule', []);

monstersModule.constant('Monsters', monsters);
monstersModule.factory('monstersService', monstersService);

export {monstersModule};
