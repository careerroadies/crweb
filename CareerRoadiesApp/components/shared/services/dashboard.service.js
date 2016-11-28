crApp.service("dashboardService", ['ajaxService', dashboardService]);

function dashboardService(ajaxService)
{
    var api__ctrl_url = api_url + "common/GetProfiles";
    this.getFriends = function(pid, successFunction, errorFunction)
    {
        ajaxService.ajaxGetWithParam(api__ctrl_url, pid, successFunction, errorFunction);
    };
}