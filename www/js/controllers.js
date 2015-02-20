angular.module('starter.controllers', [])

.controller('restaurantsCtrl', function($scope, $http) {
      $scope.data = {};
        $http.get('http://104.131.247.169/restaurant').then(function(resp) {
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
});

