/*
    Register Controller for user registration. 
*/

crApp.controller("registerController", ['$scope', '$rootScope', 'registerService', '$location', '$window', 'alertsService', registerController]);

function registerController($scope, $rootScope, registerService, $location, $window, alertsService) {

    $rootScope.closeAlert = alertsService.closeAlert;
    $rootScope.alerts = [];

    $scope.initializeController = function () {
        $scope.lable = "Create your account";
        $scope.message = "This is a registration form for a new user.";
        $scope.email = "";
        $scope.username = "";
        $scope.mobilenumber = "";
        $scope.password = "";
        $scope.usertypeid = 0;
        $scope.refferalid = "";
        $scope.userid = "";
    }

    $scope.saveRegisterComplete = function (response, status) {
        $scope.userid = response._userid;
        var url = 'applicationMaster.html#/Profile/' + $scope.userid;
        $window.location.href = url;
        //window.location = "/applicationMaster.html#/BasicProfile";
    }

    $scope.errorOnRegistration = function (response) {

        alertsService.RenderErrorMessage(response.ReturnMessage);
        $scope.clearValidationErrors();
        alertsService.SetValidationErrors($scope, response.ValidationErrors);
    }

    $scope.clearValidationErrors = function () {

        $scope.emailInputError = false;
        $scop.passwordInputError = false;
    }

    $scope.Register = function () {

        var objUser = $scope.newUserObj();
        registerService.saveUser(objUser, $scope.saveRegisterComplete, $scope.errorOnRegistration);
    }

    $scope.newUserObj = function () {

        var user = new Object();
        user.email = $scope.email;
        user.username = ($scope.email == null) ? $scope.mobilenumber : $scope.email;
        user.mobilenumber = $scope.mobilenumber;
        user.password = $scope.password;
        user.usertypeid = $scope.usertypeid;
        user.refferalid = ($scope.refferalid == null) ? "" : $scope.refferalid;
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