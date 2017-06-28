/**
 * Created by beebe on 4/20/2017.
 */
angular.module(`app`).controller(`aboutCtrl`,($scope)=>{

    $scope.images = [{
        name:`AngularJS`,
        img:`aboutMeView/icons/angular.jpg`
    },{
       name:`BootStrap`,
        img:`aboutMeView/icons/boot.jpg`
        },
        {
            name:`CSS3`,
            img:`aboutMeView/icons/css.png`
        },
        {
            name:`React`,
            img:`aboutMeView/icons/download (1).png`
        },
        {
            name:`PostgresSQL`,
            img:`aboutMeView/icons/download.png`
        },
        {
            name:`Git`,
            img:`aboutMeView/icons/git.png`
        },
        {
            name:`Gulp`,
            img:`aboutMeView/icons/gulp.jpg`
        },
        {
            name:`HTML5`,
            img:`aboutMeView/icons/html.png`
        },
        {
            name:`JavaScript`,
            img:`aboutMeView/icons/js.png`
        },
        {
            name:`NodeJS`,
            img:`http://mattguenther.com/icons/nodejs.png`
        }]


});