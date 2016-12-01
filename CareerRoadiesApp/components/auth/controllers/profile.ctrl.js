// This controller is used for saving the basic profile details for user

crApp.controller("profileController", ['$scope', 'profileService', '$routeParams', 'fillComboService', '$filter', 'fileUploadService', 'alertsService', '$rootScope', profileController]);

function profileController($scope, profileService, $routeParams, fillComboService, $filter, fileUploadService, alertsService, $rootScope) {

    this.profileStatus = [
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

    this.UserId = $routeParams.userId;
    var formdata = new FormData();
    this.ProfilePicture = "";
    
    this.initializeController = function () {
        this.lable = "Create Profile";
        this.message = "Fill the Profile Details.";

        fillComboService.fillCombo('GetCountry', null, this.fillComboComplete, this.fillComboError);
        this.childSelectIsDisabled = false;
       
    }
    

    $scope.initControlles = function() {
        this.FirstName = "";
        this.LastName = "";
        this.Gender = "0";
        this.Dob = "";
        this.AlternateEmail = "";
        this.PrimaryEmail = "";
        this.MobileNumber = "";
        this.UserId = "";
        this.ProfileId = "";
        this.Status = "1";
        this.ProfilePicture = "";
        this.ProfileText = "";
        this.stype = "A";

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

    this.getCountryState = function (country) {

        if (country) {

            ($filter('filter')(fillComboService.fillCombo('GetState', country, this.fillStateComboComplete, this.fillComboError)));
            this.childSelectIsDisabled = true;
        }
        else {
            this.childSelectIsDisabled = false;
            this.states = null;
        }

    };

    this.getStateCities = function (state) {
        if (state) {
            ($filter('filter')(fillComboService.fillCombo('GetCity', state, this.fillCityComboComplete, this.fillComboError)));
            this.childSelectIsDisabled = true;
        }
        else {
            this.cities = null;
            this.childSelectIsDisabled = false;
        }
    };

    this.fillComboComplete = function (response, status) {
        this.countries = response;
    }

    this.fillStateComboComplete = function (response, status) {
        this.states = response;
    }

    this.fillCityComboComplete = function (response, status) {
        this.cities = response;
    }

    this.fillComboError = function (response, status) {
        this.error = "error in fill combo";
        console.log(this.error);
    }

    this.saveProfileComplete = function (response, status) {
        this.profileid = response.profileid;
        console.log(this.profileid);
    }

    this.errorOnProfile = function (response, status) {
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

    this.SaveBasicDetails = function () {
        var objProfile = this.newProfileObj();
        profileService.saveProfile(objProfile, this.saveProfileComplete, this.errorOnProfile);
        this.UploadImage();
    }

    this.newProfileObj = function () {
        $scope.initControlles();
        var puser = new Object();
        puser.FirstName = this.FirstName;
        puser.LastName = this.LastName;
        puser.Gender = this.Gender;
        puser.Dob = this.Dob;
        puser.AlternateEmail = this.AlternateEmail;
        puser.PrimaryEmail = this.PrimaryEmail;
        puser.MobileNumber = this.MobileNumber;
        puser.UserId = this.UserId;
        puser.MaritalStatus = this.MaritalStatus;
        puser.ProfileId = this.ProfileId;
        puser.Status = this.Status;
        puser.ProfilePicture = this.ProfilePicture;
        puser.ProfileText = this.ProfileText;
        puser.stype = "A";
        return puser;
    }

    this.UploadImage = function () {
        var uploadUrl = api_url + "/FileUpload";
        fileUploadService.uploadFiles(formdata, uploadUrl);
    }

    // Basic Profile Details saveing function

}