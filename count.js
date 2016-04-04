var timerApp = angular.module('timerApp', []);

timerApp.controller('CountdownController', ['$scope', '$timeout',  
  function($scope, $timeout) {
    $scope.count = 0;
		$scope.decrement = function() {
          $scope.count--;
          if ($scope.count) {
              	$timeout($scope.decrement, 1000);
              } 
          if ($scope.count <= 0) {	
             		$scope.count = 0;	
              }
      };
      $scope.decrement();
  }
]);
