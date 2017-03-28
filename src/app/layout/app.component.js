const template = require('./app.html');
require ('./app.scss');

function AppController () {
    this.siteMeta = {
        title: 'Monster Browser',
        description: 'A component-based Angular 1.6 app disguised as a monster browser. With artwork by my daughter, Annalouise.'
    }
}

export const app = {
    controller: AppController,
    templateUrl: template
}
