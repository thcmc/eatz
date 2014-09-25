'use strict';

// Foods controller
angular.module('foods').controller('FoodsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Foods',
	function($scope, $stateParams, $location, Authentication, Foods ) {
		$scope.authentication = Authentication;

		// Create new Food
		$scope.create = function() {
			// Create new Food object
			var food = new Foods ({
				name: this.name,
				desc: this.desc
			});

			// Redirect after save
			food.$save(function(response) {
				$location.path('foods/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.desc = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Food
		$scope.remove = function( food ) {
			if ( food ) { food.$remove();

				for (var i in $scope.foods ) {
					if ($scope.foods [i] === food ) {
						$scope.foods.splice(i, 1);
					}
				}
			} else {
				$scope.food.$remove(function() {
					$location.path('foods');
				});
			}
		};

		// Update existing Food
		$scope.update = function() {
			var food = $scope.food ;

			food.$update(function() {
				$location.path('foods/' + food._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Foods
		$scope.find = function() {
			$scope.foods = Foods.query();
		};

		// Find existing Food
		$scope.findOne = function() {
			$scope.food = Foods.get({ 
				foodId: $stateParams.foodId
			});
		};

		$scope.orightml = '<h4>Sample \'H4\' Style for Category Title</h4><h3 style="text-align:center;">Sample \'H3\' Style for Menu Item Title (also centered)</h3><p style="text-align: center;">Sample \'P\' (paragraph) style (also centered) for menu item number 1.</p>';
		$scope.desc = $scope.orightml;


	}
]);