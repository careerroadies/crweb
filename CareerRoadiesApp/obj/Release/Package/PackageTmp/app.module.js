
/*
    this is the main module for application. we create a module for app which is used in entire application. 
*/

var crApp = angular.module("crApp", ['ngRoute', 'ngMessages']);

//// ONLY FOR TEST
//crApp.directive('rcMessage', function ()
//{
//    var messagestring = "";
//    return {
//        restrict: 'E',
//        scope:{
//            elementName: '@',
//            formName: '='
//            },
//        link: function (scope, element, attr)
//        {
//            //alert(scope.elementName.$error.required);
//            //if (scope.formName.elementName.$error.required)
//            //{
                    
//            //    messagestring = "<div ng-show='" + scope.formName.elementName.$error.required + "'>Tell us your name.</div>";
//            //}
//            //console.log("scope", scope.formName.$invalid);
//            console.log("scope", scope);
//        },
//        template: messagestring,


  //  };
//});