crApp.service("dashboardService", ['ajaxService', dashboardService]);

function dashboardService(ajaxService)
{
    var api__ctrl_url = api_url + "common/GetProfileByLocation";
    this.getSearchByLocation = function(searchCriteria, successFunction, errorFunction)
    {
        ajaxService.ajaxPost(api__ctrl_url, searchCriteria, successFunction, errorFunction);
    };
}