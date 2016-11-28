// This is common controller for profile dashboard display.

crApp.controller("dashboardController", ['$scope', 'dashboardService', dashboardController]);

function dashboardController($scope, dashboardService)
{
    $scope.buttonshow = false;
    $scope.showModal = false;
    $scope.profileId = "";
    $scope.modalShown = false;
    $scope.toggleModal = function (profileid) {
        $scope.modalShown = !$scope.modalShown;
        $scope.profileId = profileid;
    };

    $scope.numRecords = 5;
    $scope.page = 1;

    $scope.next = function ()
    {
        console.log("page next" + $scope.page);
        $scope.page = $scope.page + 1;
        
    }

    $scope.previous = function ()
    {
        console.log("page pre" + $scope.page);
        $scope.page = $scope.page - 1;
    }

    $scope.initializeController = function ()
    {
        $scope.welcomeMessage = "Welcome Mr.Deepak Bhardwaj.";
        $scope.showFriends();
        
    }
    

    $scope.NextShow = function ()
    {
        $scope.showDataLimit = $scope.showDataLimit+5;
    }
    $scope.showFriendComplete = function (response, status)
    {
        $scope.friendsList = response;
        $scope.buttonshow = true;
    }

    $scope.showFriendserror = function (respose, status)
    {
        $scope.error = "Error in showing friend list."; 
    }

    $scope.showFriends = function ()
    {
        dashboardService.getFriends(1, $scope.showFriendComplete, $scope.showFriendserror);
        
    };

    $scope.showDiv = function (item)
    {
        item.showdivelm = true;
    }
    $scope.hideDiv = function (item) {
        item.showdivelm = false;
    }
}
