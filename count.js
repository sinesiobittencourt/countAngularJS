var timerApp = angular.module('timerApp', []);

timerApp.controller('CountdownController', ['$scope', '$timeout',  
  function($scope, $timeout) {
    $scope.count = 0;
		$scope.decrement = function() {
          $scope.count--;
          if ($scope.count) {
              	$timeout($scope.decrement, 1000);
              	//1s == 1000ms  1m == 60000ms 1h == 3600000ms 
              	//Font: http://extraconversion.com/pt/tempo/horas
              
              } 
          if ($scope.count <= 0) {	
             		$scope.count = 0;	
              }
      };
      $scope.decrement();
  }
]);
