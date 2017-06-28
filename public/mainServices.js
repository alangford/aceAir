angular.module("app").service("mainService",function($http){

    this.sendMessage = (name,email,phone,desc) =>{
        return $http({
            method:"POST",
            url:"/api/sendEmails",
            data:{
                name:name,
                email:email,
                phone:phone,
                desc:desc
            }
        })
    }


});
