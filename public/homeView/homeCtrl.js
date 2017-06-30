angular.module(`app`).controller(`homeCtrl`,($scope, $state)=>{
    $scope.initMap = () =>{
        let uluru = {lat: 40.4865670, lng: -111.9394740};
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: uluru
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    };

     $scope.reload = ()=>{
         $state.reload()
     };

    let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});


    new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax2"})
        .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
        .addTo(controller);



});