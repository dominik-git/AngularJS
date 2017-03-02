(function () {

  var myApp = angular.module('myApp',[
      'ngResource',
      'angular-ladda',
      'ngRoute',
      'mgcrea.ngStrap',
      'toaster'

  ]);


    myApp.config(function ($routeProvider,$locationProvider,laddaProvider,$datepickerProvider) {
        $locationProvider.hashPrefix('');
        laddaProvider.setOption({
            style:'expand-right'
        });
        angular.extend($datepickerProvider.defaults,{
            dateFormat:'dd/MM/yyyy',
            autoclose: true
        });

        $routeProvider
            .when('/',{
                templateUrl:'html/homePage/home.html'
            })

            .when('/users',{
                templateUrl:'html/usersPage/listOfUsers.html',
                controller:'usersController'
            })

            .when('/createNewUser',{
                templateUrl:'html/createPage/createUser.html',
                controller:'userCreateController'

            })

            .when('/userInfo',{
                templateUrl:'html/profilePage/userProfile.html',
                controller:'userProfileController'

            })
            .otherwise( { redirectTo: '/' } );


    });



}());