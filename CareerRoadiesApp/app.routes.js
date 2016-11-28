
crApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Login', { templateUrl: 'components/shared/views/dashboard1.html' })
        .when('/Home', {
            templateUrl: 'components/shared/views/home.html'
        }).
        when('/Register', { templateUrl: 'components/auth/views/register.html' })
        .when('/Dashboard', { templateUrl: 'components/shared/views/dashboard.html' })
        .when('/Profile/:userid/', { templateUrl: 'components/shared/views/basicprofile.html' })
        .when('/BasicProfile', { templateUrl: 'components/shared/views/basicprofile.html' })    
       .otherwise({ redirectTo: '/Home' });
    //$locationProvider.html5Mode(true);
});

