
angular.module(`app`, [`ui.router`]).config(($urlRouterProvider,$stateProvider) => {
    $urlRouterProvider.when(``, `/`);

    $stateProvider
        .state(`home`, {
            templateUrl: `homeView/home.html`,
            url: `/`,
            controller:`homeCtrl`
        })
});