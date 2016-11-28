
crApp.service('profileService', ['ajaxService', profileService]);

var api__ctrl_url = api_url + "profile/saveprofile";

function profileService(ajaxService)
{
    this.saveProfile = function (data, successFunction, errorFunction) {
        ajaxService.ajaxPost(api__ctrl_url, data, successFunction, errorFunction);
    };
}