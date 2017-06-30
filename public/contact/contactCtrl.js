angular.module("app").controller("contactCtrl", function($scope, mainService){
    $scope.messageSent = false;
    $scope.ERR = false;
    $scope.sendMessage = () =>{
        let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

        if(regex.test($scope.phone)){
            $scope.messageSent = true;
            $scope.ERR = false;
            mainService.sendMessage($scope.name, $scope.email, $scope.phone, $scope.desc).then(res=>{
            })
        }
        else $scope.ERR = true
    };
    $scope.resetMessage = () =>{
        $scope.ERR = false;
        $scope.email = ``;
        $scope.name = ``;
        $scope.phone = ``;
        $scope.desc = ``;

    }
    $scope.initMap2 = () =>{
        let uluru2 = {lat: 40.4865670, lng: -111.9394740};
        let map2 = new google.maps.Map(document.getElementById('map2'), {
            zoom: 15,
            center: uluru2
        });
        let marker = new google.maps.Marker({
            position: uluru2,
            map: map2
        });
    };




});