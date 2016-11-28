crApp.controller("viewprofileController", ['$scope', 'profileService', viewprofileController]);

function viewprofileController($scope, profileService)
{
    $scope.userid = "";
    $scope.$watch('profileId', function (newValue, oldValue) {
        if (newValue) {
            $scope.userid = newValue;
        }
    });

    $scope.Init = function ()
    {
        $scope.viewProfile();
    }
    
    $scope.viewProfileComplete = function (response, status) {
       // $scope.profileid = response.profileid;
        console.log(response);
    }

    $scope.errorProfileComplete = function (response, status) {
        $scope.error = "error in profile."
    }
    $scope.viewProfile = function()
    {
        var profileid = $scope.userid;
        console.log(profileid);
        profileService.viewProfile(profileid, $scope.viewProfileComplete, $scope.errorProfileComplete);
    }
}