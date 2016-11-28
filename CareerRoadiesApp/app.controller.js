
crApp.controller("crMainController", ['$scope', 'ajaxService', function ($scope, ajaxService) {

    var api__ctrl_url = api_url + "demo";

    // initialize the Index page message and variable
    $scope.initializeController = function ()
    {

    }
    $scope.message = "Career Roadies"
    $scope.successCompleted = function (response, status) {
        $scope.getdata = response;
    };

    $scope.errorOnGet = function (response) {
        $scope.error = "Error on Get";
    };
    ajaxService.ajaxGet(api__ctrl_url, $scope.successCompleted, $scope.errorOnGet);
    

}]);