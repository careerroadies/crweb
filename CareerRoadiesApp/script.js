var myModal = angular.module('myModal', []);
myModal.controller('mymodalcontroller', function ($scope) {
    $scope.header = 'Put here your header';
    $scope.body = 'Put here your body';
    $scope.footer = 'Put here your footer';
    $scope.myRightButton = function (bool)
    {
        alert('!!! first function call!');
    };
});

myModal.directive('validInput', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr, ctrl)
        {
            console.log(scope);
            console.log(elem);
            console.log(ctrl);
            elem.bind('touched', function ()
            {
                alert(1111);
                alert('Please valid input');
            })
        }
    }
});

