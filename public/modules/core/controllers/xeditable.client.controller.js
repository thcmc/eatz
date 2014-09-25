'use strict';

angular.module('core').controller('XeditableController', ['$scope', 'Authentication', '$q', '$http',
	function($scope, Authentication, $q, $http) {

		$scope.authentication = Authentication;

		$scope.titles = [
			{
				one: '',
				two: '',
				three: '',
				four: '',
				five: '',
				six: '',
				seven: ''
			}
		];


		$scope.auth = {
			id: 1,
		    name: 'awesome auth'
		};

		$scope.updateAuth = function(data) {
		    return $http.post('/', {id: $scope.auth.id, name: data});
		};

		// $scope.items = [
		// {
		// 	id: 1,
		// 	name: 'Cherry-Almond Granola ',
		// 	desc: 'bean Greek yogurt, berries, lemon balm '
		// },
		// {
		// 	id: 2,
		// 	name: 'Hickory & Oak Smoked Pork Belly',
		// 	desc: 'five minute egg, baby kale, cherry-vanilla bean maple syrup'
		// },
		// {
		// 	id: 3,
		// 	name: 'Grilled Sticky ',
		// 	desc: 'crème anglaze, walnut brittle'
		// },
		// {
		// 	id: 4,
		// 	name: 'Blood Orange Cured Alaskan Salmon',
		// 	desc: 'pickled onion, local Spring Valley spinach, dill cream cheese, everything bagel'
		// }
		// ];
	}
]);