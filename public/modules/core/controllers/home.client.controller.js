'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
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
		$scope.items = [
		{
			name: 'Cherry-Almond Granola ',
			desc: 'bean Greek yogurt, berries, lemon balm '
		},
		{
			name: 'Hickory & Oak Smoked Pork Belly',
			desc: 'five minute egg, baby kale, cherry-vanilla bean maple syrup'
		},
		{
			name: 'Grilled Sticky ',
			desc: 'crème anglaze, walnut brittle'
		},
		{
			name: 'Blood Orange Cured Alaskan Salmon',
			desc: 'pickled onion, local Spring Valley spinach, dill cream cheese, everything bagel'
		}
		];
		$scope.tastings = [
		{
			name: 'Composition of local greens',
			course: 'First Course',
			desc: 'local heirloom tomato, parmesan-pepper cracker, broken verjus vinegar + evoo'
		},
		{
			name: 'Ocean garden shrimp + scallop “potato crusted”',
			course: 'Second Course',
			desc: 'roasted peppers, grilled baby eggplant, lemon emulsion'
		},
		{
			name: 'All nature roasted chicken',
			course: 'Third Course',
			desc: 'leg risotto, wilted spinach + frisee, pinot noir reduction'
		},
		{
			name: 'Prime hanger steak',
			course: 'Fourth Course',
			desc: 'corn grits, local beans, maytag blue cream'
		},
		{
			name: 'Trio of house-made ice cream & lemon pound cake',
			course: 'Fifth Course',
			desc: 'coconut, double chocolate-mint, strawberry-basil'
		}
		];
		$scope.firsts = [
		{
			name: 'Composition of local greens',
			course: 'First Course',
			desc: 'trilogy of beets, parmesan-pepper cracker, broken verjus vinegar + evoo'
		},
		{
			name: 'Clare Isle organic salmon “blood orange cured”', 
			course: 'First Course', 
			desc: ', endive, “candy” red onion champagne vinegar'
		},
		{
			name: 'Chicken fired pork belly “caesar salad”', 
			course: 'First Course', 
			desc: 'romaine, oven dried tomato, peppercorn-parmesan'
		}
		];
		$scope.seconds = [
		{
			name: 'Veal shank', 
			course: 'Second Course', 
			desc: 'sweet potato fingerling + cauliflower hash, kale, reduced braising liquid'
		},
		{
			name: 'Beef short rib', 
			course: 'Second Course', 
			desc: 'corn grits, dandelion greens, buttermilk fired okra “popper”'
		},
		{
			name: 'Hand-made fresh pasta', 
			course: 'Second Course', 
			desc: 'grilled summer squash, local tomatoes & mushrooms, basil'
		},
		{
			name: 'Local vegetable terrine & wild Alaskan copper river salmon', 
			course: 'Second Course', 
			desc: 'mascarpone, cous cous, pea tendrils, tomato broth'
		}
		];
	}
]);