/*
      This service is used for registered users.
*/

crApp.service("registerService", ['ajaxService', registerService]);

var api__ctrl_url = "";
function registerService(ajaxService) {
    
    this.saveUser = function (objdata, successFunction, errorFunction) {
        api__ctrl_url = api_url + "user/saveuser";
        ajaxService.ajaxPost(api__ctrl_url, objdata, successFunction, errorFunction);
    }

    this.Login = function (objdata, successFunction, errorFunction) {
        api__ctrl_url = api_url + "user/Login";
        ajaxService.ajaxPost(api__ctrl_url, objdata, successFunction, errorFunction);
    }
}