
crApp.service('profileService', ['ajaxService', profileService]);

var api__ctrl_url = ""; 

function profileService(ajaxService)
{
    this.saveProfile = function (data, successFunction, errorFunction) {
        api__ctrl_url = api_url + "profile/saveprofile";
        ajaxService.ajaxPost(api__ctrl_url, data, successFunction, errorFunction);
    };

    this.viewProfile = function (data, successFunction, errorFunction)
    {
        api__ctrl_url = api_url + "profile/viewprofile";
        ajaxService.ajaxGetWithParam(api__ctrl_url, data, successFunction, errorFunction);
    }
}