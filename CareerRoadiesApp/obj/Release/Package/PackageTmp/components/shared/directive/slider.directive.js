crApp.directive('flexslider', function () {

    return {
        link: function (scope, element, attrs) {

            element.flexslider({
                animation: "slide"                
            });
        }
    }
});