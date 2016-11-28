/*This service is used from fill the drop downs*/

crApp.service('fillComboService', ['ajaxService', fillComboService]);

function fillComboService(ajaxService)
{
    
    this.fillCombo = function (comboType, countryid, successFunction, errorFunction)
    {
        var api__ctrl_url = api_url + "common/" + comboType;  
        if (comboType == "GetCountry")
            ajaxService.ajaxGet(api__ctrl_url, successFunction, errorFunction);
        else
            ajaxService.ajaxGetWithParam(api__ctrl_url, countryid, successFunction, errorFunction);
    }
}