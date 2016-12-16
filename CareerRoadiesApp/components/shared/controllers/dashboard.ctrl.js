// This is common controller for profile dashboard display.

crApp.controller("dashboardController", ['$scope', 'dashboardService', 'fillComboService', '$filter', '$timeout', dashboardController]);

function dashboardController($scope, dashboardService, fillComboService, $filter, $timeout) {
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

    $scope.next = function () {
        console.log("page next" + $scope.page);
        $scope.page = $scope.page + 1;

    }

    $scope.previous = function () {
        console.log("page pre" + $scope.page);
        $scope.page = $scope.page - 1;
    }

    $scope.initializeController = function () {
        $scope.welcomeMessage = "Welcome Mr.Deepak Bhardwaj.";
        //$scope.showFriends(); 
        $scope.location = "";
        $scope.city = "";
        $scope.state = "";
        fillComboService.fillCombo('GetState', null, $scope.fillStateComboComplete, $scope.fillComboError);
    }


    $scope.NextShow = function () {
        $scope.showDataLimit = $scope.showDataLimit + 5;
    }
    $scope.showusersComplete = function (response, status) {
        $scope.friendsList = response;
        $scope.buttonshow = true;
    }
    $scope.firstListAdapter = {
        remain: true
    };
    $scope.showuserserror = function (respose, status) {
        $scope.error = "Error in showing friend list.";
    }

    $scope.showUsers = function () {
        var objsearch = $scope.searchParameter();
        dashboardService.getSearchByLocation(objsearch, $scope.showusersComplete, $scope.showuserserror);

    };

    $scope.searchParameter = function () {
        var searchparameter = new Object();
        searchparameter.location = $scope.location;
        searchparameter.city = $scope.city;
        searchparameter.state = $scope.state;
        return searchparameter;
    }

    $scope.showDiv = function (item) {
        item.showdivelm = true;
    }
    $scope.hideDiv = function (item) {
        item.showdivelm = false;
    }

    $scope.states = "";
    $scope.fillStateComboComplete = function (response, status) {
        $scope.states = response;
        console.log($scope.states);
    }

    $scope.fillCityComboComplete = function (response, status) {
        $scope.cities = response;
    }

    $scope.fillComboError = function (response, status) {
        $scope.error = "error in fill combo";
        console.log($scope.error);
    }
    $scope.getStateCities = function (state) {
        if (state) {
            ($filter('filter')(fillComboService.fillCombo('GetCity', state, $scope.fillCityComboComplete, $scope.fillComboError)));
            $scope.childSelectIsDisabled = true;
        }
        else {
            $scope.cities = null;
            $scope.childSelectIsDisabled = false;
        }
    };

}
