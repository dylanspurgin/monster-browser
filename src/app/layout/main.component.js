const template = require('./main.html');
require('./_main.scss');

function MainController () {
    this.siteMeta = {
        title: 'Monster Browser',
        description: 'A component-based Angular 1.6 app disguised as a monster browser. With artwork by my daughter, Annalouise.'
    }
}

export const main = {
    controller: MainController,
    templateUrl: template
}
