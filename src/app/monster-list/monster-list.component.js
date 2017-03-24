MonsterListController.$inject = ['Monsters'];
function MonsterListController (Monsters) {
    this.monsters = Monsters;
}

export const monsterList = {
    controller: MonsterListController,
    template: `
    <h1>Monsters</h1>
    <ul>
      <li ng-repeat="monster in $ctrl.monsters" ui-sref-active="userselected">
        <a ui-sref="monsterDetail({ monsterId: monster.id })"
            ng-disabled="!monster.active"
            ng-class="{ deactivated: !monster.active }">
          {{ monster.name }}
        </a>
      </li>
    </ul>

    <div ui-view>Click on a monster name to see details</div>
  `
};
