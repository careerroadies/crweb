crApp.directive("inputFileControl", function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            var onChangeHandler = scope.$eval(attrs.inputFileControl);
            element.bind('change', onChangeHandler);
        }

    }
});