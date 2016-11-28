
crApp.config(function ($routeProvider) {
    $routeProvider.when('/Login', { templateUrl: '/Index.html' }).when('/Home', {
        templateUrl: 'components/shared/views/home.html'
    }).when('/Register', { templateUrl: 'components/auth/views/register.html' })
        .when('/Profile/:userid/', { templateUrl: 'components/auth/views/profile.html' })
       .otherwise({ redirectTo: '/Home' })
});

