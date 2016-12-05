// This controller is used for saving the basic profile details for user

crApp.controller("profileController", ['$scope', 'profileService', '$routeParams', 'fillComboService', '$filter', 'fileUploadService', 'alertsService', '$rootScope', profileController]);

function profileController($scope, profileService, $routeParams, fillComboService, $filter, fileUploadService, alertsService, $rootScope) {

    $scope.profileStatus = [
    {
        id: 0,
        name: 'Please Select'
    },
    {
        id: 1,
        name: 'Active'
    },
    {
        id: 2,
        name: 'In-Active'
    }
    ];
    $rootScope.closeAlert = alertsService.closeAlert;
    $rootScope.alerts = [];

   

    $scope.UserId = $routeParams.userId;
    var formdata = new FormData();
    $scope.ProfilePicture = "";
    
    $scope.initializeController = function () {
        $scope.lable = "Create Profile";
        $scope.message = "Fill the Profile Details.";

        //fillComboService.fillCombo('GetCountry', null, $scope.fillComboComplete, $scope.fillComboError);
        //$scope.childSelectIsDisabled = false;

        fillComboService.fillCombo('GetState', null, $scope.fillStateComboComplete, $scope.fillComboError);
        
    }
    

    $scope.initControlles = function() {
        $scope.FirstName = "";
        $scope.LastName = "";
        $scope.Gender = "0";
        $scope.Dob = "";
        $scope.AlternateEmail = "";
        $scope.PrimaryEmail = "";
        $scope.MobileNumber = "";
        $scope.UserId = "";
        $scope.ProfileId = "";
        $scope.Status = "1";
        $scope.ProfilePicture = "";
        $scope.ProfileText = "";
        $scope.stype = "A";
        $scope.city = "";
        $scope.state = "";
        $scope.location = "";

    }
   

    // For Upload Image for profile.    
    $scope.uploadFile = function (event) {
        $scope.width = "100px";
        $scope.height = "100px";

        var files = event.target.files;
        angular.forEach(files, function (value, key) {
            formdata.append(key, value);
        });

        // Read file and display as preview.
        var reader = new FileReader();
        reader.onload = function (simage) {

            $scope.image_sorce = simage.target.result;
            $scope.$apply();
        };

        console.log(files[0].name);
        reader.readAsDataURL(event.target.files[0]);
        $scope.ProfilePicture = files[0].name;
    };

  /*  $scope.getCountryState = function (country) {

        if (country) {

            ($filter('filter')(fillComboService.fillCombo('GetState', country, $scope.fillStateComboComplete, $scope.fillComboError)));
            $scope.childSelectIsDisabled = true;
        }
        else {
            $scope.childSelectIsDisabled = false;
            $scope.states = null;
        }

    };*/

    $scope.getStateCities = function (state) {
        if (state) {
            ($filter('filter')(fillComboService.fillCombo('GetCity', state, $scope.fillCityComboComplete, $scope.fillComboError)));
            $scope.childSelectIsDisabled = true;
        }
        else {
            $scope.cities = null;
            $scope.childSelectIsDisabled = false;
        }
    };

    //$scope.fillComboComplete = function (response, status) {
    //    $scope.countries = response;
    //}

    $scope.states = "";
    $scope.fillStateComboComplete = function (response, status) {
        $scope.states = response;
        console.log($scope.states);
    }

    $scope.fillCityComboComplete = function (response, status) {
        $scope.cities = response;
    }

    $scope.fillComboError = function (response, status) {
        $scope.error = "error in fill combo";
        console.log($scope.error);
    }

    $scope.saveProfileComplete = function (response, status) {
        $scope.profileid = response.profileid;
        console.log($scope.profileid);
    }

    $scope.errorOnProfile = function (response, status) {
        alertsService.RenderErrorMessage(response.ReturnMessage);
        $scope.clearValidationErrors();
        alertsService.SetValidationErrors($scope, response.ValidationErrors);
    }
    $scope.clearValidationErrors = function () {

        $scope.FirstNameInputError = false;
        $scope.LastNameInputError = false;
        $scope.PrimaryEmailInputError = false;
        $scope.AlternateEmailInputError = false;
        $scope.GenderInputError = false;
    }

    $scope.SaveBasicDetails = function () {
        var objProfile = $scope.newProfileObj();
        //profileService.saveProfile(objProfile, $scope.saveProfileComplete, $scope.errorOnProfile);
        //$scope.UploadImage();
    }

    $scope.newProfileObj = function () {
        $scope.initControlles();
        alert($scope.city);
        alert($scope.state);
        var puser = new Object();
        puser.FirstName = $scope.FirstName;
        puser.LastName = $scope.LastName;
        puser.Gender = $scope.Gender;
        puser.Dob = $scope.Dob;
        puser.AlternateEmail = $scope.AlternateEmail;
        puser.PrimaryEmail = $scope.PrimaryEmail;
        puser.MobileNumber = $scope.MobileNumber;
        puser.UserId = $scope.UserId;
        puser.MaritalStatus = $scope.MaritalStatus;
        puser.ProfileId = $scope.ProfileId;
        puser.Status = $scope.Status;
        puser.ProfilePicture = $scope.ProfilePicture;
        puser.ProfileText = $scope.ProfileText;
        puser.city = $scope.city;
        puser.state = $scope.state;
        puser.location = $scope.location;
        puser.stype = "A";
        return puser;
    }

    $scope.UploadImage = function () {
        var uploadUrl = api_url + "/FileUpload";
        fileUploadService.uploadFiles(formdata, uploadUrl);
    }

    // Basic Profile Details saveing function

}