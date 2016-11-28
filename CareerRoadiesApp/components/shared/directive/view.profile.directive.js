crApp.directive('modalDialog', function () {
    return {
        restrict: 'E',
        scope: {
            show: '=',
            profileId: '='
        },
       // replace: true, // Replace with the template below
        //transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            alert(1);
            scope.dialogStyle = {};
            if (attrs.width)
                scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                scope.dialogStyle.height = attrs.height;
            scope.hideModal = function () {
                scope.show = false;
            };
        },
        templateUrl: 'partialmodal.html' // See below
    };
});