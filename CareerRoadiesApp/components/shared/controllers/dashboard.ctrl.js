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

    var datasource, idList1, idList2;
    datasource = {};
    datasource.get = function (index, count, success) {
        return $timeout(function () {
            var i, item, j, ref, ref1, result;
            result = [];
            for (i = j = ref = index, ref1 = index + count - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
                item = {};
                item.id = i;
                item.content = "item #" + i;
                result.push(item);
            }
            return success(result);
        }, 100);
    };
    $scope.datasource = datasource;
    $scope.updateList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
            return item.content += ' *';
        });
    };
    $scope.removeFromList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
            if (scope.$index % 2 === 0) {
                return [];
            }
        });
    };
    idList1 = 1000;
    $scope.addToList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
            var newItem;
            newItem = void 0;
            if (scope.$index === 2) {
                newItem = {
                    id: idList1,
                    content: 'a new one #' + idList1
                };
                idList1++;
                return [item, newItem];
            }
        });
    };
    $scope.updateList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
            return item.content += ' *';
        });
    };
    $scope.removeFromList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
            if (scope.$index % 2 !== 0) {
                return [];
            }
        });
    };
    idList2 = 2000;
    return $scope.addToList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
            var newItem;
            newItem = void 0;
            if (scope.$index === 4) {
                newItem = {
                    id: idList2,
                    content: 'a new one #' + idList1
                };
                idList2++;
                return [item, newItem];
            }
        });
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
