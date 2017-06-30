angular.module("app").controller("appointmentCtrl", function($scope, mainService){
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

});