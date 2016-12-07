/*
    Register Controller for user registration. 
*/

crApp.controller("loginController", ['$scope', '$rootScope', 'registerService', '$location', '$window', 'alertsService', loginController]);

function loginController($scope, $rootScope, registerService, $location, $window, alertsService) {

    $rootScope.closeAlert = alertsService.closeAlert;
    $rootScope.alerts = [];

    $scope.initializeController = function () {
        $scope.username = "";
        $scope.password = "";
        $scope.usertypeid = "";
    }

    $scope.LoginComplete = function (response, status) {
        $scope.userId = response.user_id;
        window.location = "/applicationMaster.html#/Dashboard";
        //window.location = "/applicationMaster.html#/BasicProfile";
        //window.location = "/applicationMaster.html#/Profile";
        $scope.enablelogin = true;
       // var url = '/applicationMaster.html#/Profile/' + $scope.userId;
        $window.location.href = url;
    }

    $scope.Loginerror = function (response) {

        alertsService.RenderErrorMessage(response.ReturnMessage);
        $scope.clearValidationErrors();
        alertsService.SetValidationErrors($scope, response.ValidationErrors);
    }

    $scope.clearValidationErrors = function () {

        $scope.usernameInputError = false;
        $scope.passwordInputError = false;
    }

    $scope.Login = function () {
        //var objUser = $scope.newUserObj();
        //registerService.Login(objUser, $scope.LoginComplete, $scope.Loginerror);

        window.location = "/applicationMaster.html#/Dashboard";
        //window.location = "/applicationMaster.html#/BasicProfile";
        //window.location = "/applicationMaster.html#/Profile";
        $scope.enablelogin = true;
        // var url = '/applicationMaster.html#/Profile/' + $scope.userId;
        $window.location.href = url;
    }

    $scope.newUserObj = function () {

        var user = new Object();
        user.username = $scope.username;
        user.password = $scope.password;
        user.usertypeid = $scope.usertypeid;
        return user;
    }


    // For Login
    $scope.enablelogin = false;

    $scope.MenuItem = [{ menuname: 'Home', url: 'index.html' },
                        { menuname: 'About', url: 'index.html' },
                        { menuname: 'Services', url: 'index.html' },
                        { menuname: 'News', url: 'index.html' },
                         { menuname: 'Contact', url: 'index.html' }
    ];

   

}