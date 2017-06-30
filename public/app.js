/**
 * Created by beebe on 4/19/2017.
 */
angular.module(`app`, [`ui.router`, `ngAnimate`,`ui.bootstrap`,`ngTouch`]).config(($urlRouterProvider,$stateProvider) => {
    $urlRouterProvider.when(``, `/`);

    $stateProvider
        .state(`home`, {
            templateUrl: `homeView/homeView.html`,
            url: `/`
        })
        .state(`about`,{
            templateUrl:`aboutMeView/about.html`,
            url:`/about`

        })
        .state(`contact`,{
            templateUrl:`contact/contactView.html`,
            url:`/contact`
        })

});