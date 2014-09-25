'use strict';

// Configuring the Articles module
angular.module('foods').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Food Menus', 'foods', 'dropdown', '/foods(/create)?');
		Menus.addSubMenuItem('topbar', 'foods', 'List Menus', 'foods');
		Menus.addSubMenuItem('topbar', 'foods', 'Add New Menu', 'foods/create');
	}
]);