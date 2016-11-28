// This controller is used for saving the basic profile details for user

crApp.controller("profileController", ['$scope', 'profileService', '$routeParams', 'fillComboService', '$filter', 'fileUploadService', profileController]);

function profileController($scope, profileService, $routeParams, fillComboService, $filter, fileUploadService) {

    var formdata = new FormData();

    $scope.initializeController = function () {
        $scope.lable = "Create Profile";
        $scope.message = "Fill the Profile Details.";
        $scope.userid = ($routeParams.userid || "");
        fillComboService.fillCombo('GetCountry', null, $scope.fillComboComplete, $scope.fillComboError);
        $scope.childSelectIsDisabled = false;
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

        reader.readAsDataURL(event.target.files[0]);
        $scope.filename = files[0].name;
    };

    $scope.getCountryState = function (country) {

        if (country) {

            ($filter('filter')(fillComboService.fillCombo('GetState', country, $scope.fillStateComboComplete, $scope.fillComboError)));
            $scope.childSelectIsDisabled = true;
        }
        else {
            $scope.childSelectIsDisabled = false;
            $scope.states = null;
        }

    };

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

    $scope.fillComboComplete = function (response, status) {
        $scope.countries = response;
    }

    $scope.fillStateComboComplete = function (response, status) {
        $scope.states = response;
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
        $scope.error = "error in profile."
    }

    $scope.SaveProfile = function () {
        var objProfile = $scope.newProfileObj();
        console.log(objProfile);
        profileService.saveProfile(objProfile, $scope.saveProfileComplete, $scope.errorOnProfile);
        this.UploadImage();
    }

    $scope.newProfileObj = function () {
        var puser = new Object();
        puser.userid = $scope.userid;
        puser.firstname = $scope.firstname;
        puser.lastname = $scope.lastname;
        puser.dob = $scope.dob;
        puser.country = $scope.country;
        puser.state = $scope.state;
        puser.city = $scope.city;
        puser.permanentaddress = $scope.permanentaddress;
        puser.contactno = $scope.contactno;
        puser.firstname = $scope.filename;
        return puser;
    }

    $scope.UploadImage = function () {
        var uploadUrl = api_url + "/FileUpload";
        fileUploadService.uploadFiles(formdata, uploadUrl);

    }
}