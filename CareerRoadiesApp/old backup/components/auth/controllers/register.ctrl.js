/*
    Register Controller for user registration. 
*/

crApp.controller("registerController", ['$scope', 'registerService', '$location', '$window', registerController]);

function registerController($scope, registerService, $location, $window) {

    $scope.initializeController = function ()
    {
        $scope.lable = "Create your account";
        $scope.message = "This is a registration form for a new user.";
    }

    $scope.saveRegisterComplete = function (response, status) {
        $scope.userid = response.userid;
        var url = '#/Profile/' + $scope.userid;
        $window.location.href = url;
    }

    $scope.errorOnRegistration = function (response, status) {
        $scope.error = "error in registration."
        console.log($scope.error);
    }

    $scope.Register = function () {
        var objUser = $scope.newUserObj();
        registerService.saveUser(objUser, $scope.saveRegisterComplete, $scope.errorOnRegistration);
    }

    $scope.newUserObj = function ()
    {
        var user = new Object();
        user.username = $scope.username;
        user.contactno = $scope.contactno;
        user.dob = $scope.dob;
        user.password = $scope.password;
        return user;
    }
}