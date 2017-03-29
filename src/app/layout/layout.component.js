const template = require('./layout.html');
require('./_layout.scss');

function LayoutController () {
    this.siteMeta = {
        title: 'Monster Browser',
        description: 'A component-based Angular 1.6 app disguised as a monster browser. With artwork by my daughter, Annalouise.'
    }
}

export const layout = {
    controller: LayoutController,
    templateUrl: template
}
