/*
      This service is used for registered users.
*/

crApp.service("registerService", ['ajaxService', registerService]);

function registerService(ajaxService) {
    var api__ctrl_url = api_url + "user/saveuser";
    this.saveUser = function (objdata, successFunction, errorFunction) {
        ajaxService.ajaxPost(api__ctrl_url, objdata, successFunction, errorFunction);
    }
}