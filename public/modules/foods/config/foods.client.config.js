'use strict';

// Configuring the Articles module
angular.module('foods').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Food Menus', 'foods', 'dropdown', '/foods(/create)?');
		Menus.addSubMenuItem('topbar', 'foods', 'View Food Menus', 'foods');
		Menus.addSubMenuItem('topbar', 'foods', 'Add/Edit Food Menus', 'foods/create');
	}
]);