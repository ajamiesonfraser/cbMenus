angular.module('starter.controllers', [])

.controller('restaurantsCtrl', function($scope, $http) {
      $scope.data = {};
        $http.get('http://104.131.247.169/restaurant/').then(function(resp) {
            console.log('Success', resp);
            // For JSON responses, resp.data contains the result
            $scope.restaurants = resp.data;
        }, function(err) {
            console.error('ERR', err);
            // err.status will contain the status code
        });
      $scope.clearSearch = function() {
        $scope.data.searchQuery = '';
      };
})

    .controller('restaurantCtrl', function($scope, $http, $stateParams) {
        console.log($stateParams);
        $http.get('http://104.131.247.169/restaurant/'+$stateParams.restaurantId).then(function(resp) {
            console.log('Success', resp);
            // For JSON responses, resp.data contains the result
            $scope.restaurant = resp.data;
        }, function(err) {
            console.error('ERR', err);
            // err.status will contain the status code
        });
})

.controller('CameraCtrl', function($scope, $state) {

    // PLEASE NOTE:  you must install the apache cordova camera plugin for this to function.
    // You can install it with the following command:  ionic plugin add org.apache.cordova.camera

    // set the default image URI (a color bar image)
    $scope.imageURI = 'http://www.dvinfo.net/forum/attachments/view-video-display-hardware-software/4853d1193613730-smpte-color-bars-bars_pal.jpg';

    // the takePhoto function attached to the button
    $scope.takePhoto = function() {

        // default camera options, please see https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
        // for the complete list
        var cameraOptions = {
            targetWidth: 300,
            targetHeight: 300
        };

        // perform the api call to take the picture.
        // The success function has a URI containing the file location on the phone of the image
        // The error function sends an alert that an issue has occured
        // The cameraOptions are defined above
        navigator.camera.getPicture(function(imageURI) {

            $scope.imageURI = imageURI;
            $state.go('tab.camera');

        }, function(err) {

            alert("Oops!  Can't take your photo!  Either you backed out before saving a photo, or you are not on a device.  Camera will not work from the emulator...");
        }, cameraOptions);
    }
});
