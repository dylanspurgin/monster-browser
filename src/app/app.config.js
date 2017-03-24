export const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => {
    $urlRouterProvider.otherwise("/monsters");
}];

export const html5ModeConfigBlock = ['$locationProvider', $locationProvider => {
    $locationProvider.html5Mode(true);
}]
