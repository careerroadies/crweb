
crApp.service("fileUploadService", ['$http', function ($http) {
    this.uploadFiles = function (sdata, spath) {

        var request = {
            method: 'POST',
            url: spath,
            data: sdata,
            headers: {
                'Content-Type': undefined
            }
        };

        // SEND THE FILES.
        $http(request)
            .success(function (d) {
                alert(d);
            })
            .error(function () {
            });
    }
}]);