/*This service is used from fill the drop downs*/

crApp.service('fillComboService', ['ajaxService', fillComboService]);

function fillComboService(ajaxService)
{
    this.fillCombo = function (comboType, id, successFunction, errorFunction)
    {
        var api__ctrl_url = api_url + "common/" + comboType;  
        if (comboType == "GetState")
            ajaxService.ajaxGet(api__ctrl_url, successFunction, errorFunction);
        else
            ajaxService.ajaxGetWithParam(api__ctrl_url, id, successFunction, errorFunction);
    }
}