angular.module(`app`).controller(`contactCtrl`,($scope, $state)=>{
     $scope.initMap2 = () =>{
        let uluru2 = {lat: 40.638802, lng: -111.900317};
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