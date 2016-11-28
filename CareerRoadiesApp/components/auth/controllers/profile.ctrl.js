// This controller is used for saving the basic profile details for user

crApp.controller("profileController", ['$scope','profileService', '$routeParams', 'fillComboService', '$filter', 'fileUploadService', profileController]);

function profileController($scope, profileService, $routeParams, fillComboService, $filter, fileUploadService) {

    this.userid = $routeParams.userid;
    var formdata = new FormData();
    this.profilepicture = "";
    this.initializeController = function () {
        this.lable = "Create Profile";
        this.message = "Fill the Profile Details.";
        
        this.userid = ($routeParams.userid || "");
        fillComboService.fillCombo('GetCountry', null, this.fillComboComplete, this.fillComboError);
        this.childSelectIsDisabled = false;
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
        $scope.profilepicture = files[0].name;
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
        this.error = "error in profile."
    }

    this.SaveBasicDetails = function () {
        var objProfile = this.newProfileObj();
        profileService.saveProfile(objProfile, this.saveProfileComplete, this.errorOnProfile);
        this.UploadImage();
    }

    this.newProfileObj = function () {
        var puser = new Object();
        puser.userid = 305  //this.userid;
        puser.firstname = this.firstname;
        puser.lastname = this.lastname;
        puser.middlename = "";
        puser.fathername = this.fathername;
        puser.mothername = this.mothername;
        puser.dob = this.dob;
        puser.country = "India"//this.country;
        puser.state = this.state;
        puser.city = this.city;
        puser.location = this.location;
        puser.contactno = this.contactno;
        puser.profilepicture = this.profilepicture;
        console.log(this.profilepicture);
        puser.profiletext = this.profiletext;
        puser.bloodgroup = "";//this.bloodgroup;
        puser.stype = "A";
        return puser;
    }

    this.UploadImage = function () {
        var uploadUrl = api_url + "/FileUpload";
        fileUploadService.uploadFiles(formdata, uploadUrl);
    }

    // Basic Profile Details saveing function

}