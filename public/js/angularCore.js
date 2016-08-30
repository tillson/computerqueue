var pgSchedule = angular.module('queue', []);

pgSchedule.controller('mainController', ['$scope', '$http', '$log', '$interval', '$window', function($scope, $http, $log, $interval, $window) {
  $scope.queue = [];
  $scope.addQueue = {};

  $scope.addToQueue = function() {
    console.log($scope.addQueue);
    $http({
      method: 'POST',
      url: '/api/addToQueue',
      data: $scope.addQueue,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data) {
      $scope.queue = data;
      $window.location.href = '/';
    });
  }

  $scope.remove = function($event) {
    var index = parseInt($event.target.innerHTML.substring(7)) - 1;
    $http({
      method: 'POST',
      url: '/api/removeFromQueue',
      data: 'removal=' + index,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data) {
      $scope.queue = data;
    });
  }

  $scope.getQueue = function() {
    $http.get('/api/getQueue').success(function(data) {
      $scope.queue = data;
    });
  }

  $scope.getQueue();
  $interval($scope.getQueue, 1000 * 5);

}]);
