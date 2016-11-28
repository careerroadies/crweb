

// This service is use for the Ajax GET, PUT, POST and DELETE operations 

crApp.service("ajaxService", ['$http', function ($http)
{
    this.ajaxGet = function (route, successFunction, errorFunction) {
        $http({ method: 'GET', url: route }).success(function (response, status) {
            successFunction(response, status);
        }).error(function (response) { errorFunction(response) });
    };

    this.ajaxGetWithParam = function (route, data, successFunction, errorFunction) {
        $http({ method: 'GET', url: route, params: { id: data } }).success(function (response, status, headers, config) {
            successFunction(response, status);
        }).error(function (response) { errorFunction(response) });
    };

    this.ajaxPost = function (route, data, successFunction, errorFunction) {
        $http.post(route, data).success(function (response, status) {
            successFunction(response, status);

        }).error(function (response) {
            
            errorFunction(response);
        })
    };
}]);