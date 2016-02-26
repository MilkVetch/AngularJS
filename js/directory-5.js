angular.module('directoryApp',[])
	.controller('directoryController', function($scope) {
		$scope.list = [
			{name:'Khee', age: 27},
			{name:'King', age: 48},
			{name:'Gold', age: 50},
			{name:'Poem', age: 46}
		];

		$scope.addPerson = function() {
			$scope.list.push({name: $scope.name, age: $scope.age});
			$scope.name = '';
			$scope.age = 0;
		};
	});