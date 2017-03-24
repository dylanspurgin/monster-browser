function MonsterDetailController () {
    // no op
}

export const monsterDetail = {
    controller: MonsterDetailController,
    bindings: {
        monster: '<'
    },
    template: `
    <dl>
        <dt>Name</dt>
        <dd>{{$ctrl.monster.name}}</dd>
        <dt>Age</dt>
        <dd>{{$ctrl.monster.age}}</dd>
        <dt>Origin</dt>
        <dd>{{$ctrl.monster.origin}}</dd>
        <dt>Description</dt>
        <dd>{{$ctrl.monster.description}}</dd>
    </dl>
    <img src="{{$ctrl.monster.image}}" width="400"/>
  `
};
