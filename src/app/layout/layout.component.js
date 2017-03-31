const template = require('./layout.html');
require('./_layout.scss');

function LayoutController () {
    this.siteMeta = {
        title: 'Monster Browser',
        description: 'A responsive, component-based Angular 1.6 app disguised as a monster browser. With artwork by my daughter, Annalouise.'
    }

    this.menuItems = [
        {
            text: 'view on github',
            href: 'https://github.com/dylanspurgin/monster-browser'
        }
    ]
}

export const layout = {
    controller: LayoutController,
    templateUrl: template
}
