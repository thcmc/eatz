'use strict';
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = function () {
    // Init module configuration options
    var applicationModuleName = 'mean';
    var applicationModuleVendorDependencies = [
        'ngResource',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ui.utils',
        'textAngular'
      ];
    // Add a new vertical module
    var registerModule = function (moduleName) {
      // Create angular module
      angular.module(moduleName, []);
      // Add the module to the AngularJS configuration file
      angular.module(applicationModuleName).requires.push(moduleName);
    };
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  }();'use strict';
//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_')
    window.location.hash = '#!';
  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('foods');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');// 'use strict';
// // Configuring the Articles module
// angular.module('articles').run(['Menus',
// 	function(Menus) {
// 		// Set top bar menu items
// 		Menus.addMenuItem('topbar', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
// 		Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
// 		Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
// 	}
// ]);
'use strict';
// Setting up route
angular.module('articles').config([
  '$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider.state('listArticles', {
      url: '/articles',
      templateUrl: 'modules/articles/views/list-articles.client.view.html'
    }).state('createArticle', {
      url: '/articles/create',
      templateUrl: 'modules/articles/views/create-article.client.view.html'
    }).state('viewArticle', {
      url: '/articles/:articleId',
      templateUrl: 'modules/articles/views/view-article.client.view.html'
    }).state('editArticle', {
      url: '/articles/:articleId/edit',
      templateUrl: 'modules/articles/views/edit-article.client.view.html'
    });
  }
]);'use strict';
angular.module('articles').controller('ArticlesController', [
  '$scope',
  '$stateParams',
  '$location',
  'Authentication',
  'Articles',
  function ($scope, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;
    $scope.create = function () {
      var article = new Articles({
          title: this.title,
          content: this.content
        });
      article.$save(function (response) {
        $location.path('articles/' + response._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
      this.title = '';
      this.content = '';
    };
    $scope.remove = function (article) {
      if (article) {
        article.$remove();
        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function () {
          $location.path('articles');
        });
      }
    };
    $scope.update = function () {
      var article = $scope.article;
      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    $scope.find = function () {
      $scope.articles = Articles.query();
    };
    $scope.findOne = function () {
      $scope.article = Articles.get({ articleId: $stateParams.articleId });
    };
  }
]);'use strict';
//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', [
  '$resource',
  function ($resource) {
    return $resource('articles/:articleId', { articleId: '@_id' }, { update: { method: 'PUT' } });
  }
]);'use strict';
// Setting up route
angular.module('core').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
    // Home state routing
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'modules/core/views/home.client.view.html'
    });  // .
         // state('home.menu', {
         // 	url: 'menu',
         // 	templateUrl: 'modules/core/views/home.client.view.menu.html'
         // })
  }
]);'use strict';
angular.module('core').controller('HeaderController', [
  '$scope',
  'Authentication',
  'Menus',
  function ($scope, Authentication, Menus) {
    $scope.authentication = Authentication;
    $scope.isCollapsed = false;
    $scope.menu = Menus.getMenu('topbar');
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);'use strict';
angular.module('core').controller('HomeController', [
  '$scope',
  'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.titles = [{
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: ''
      }];
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
        desc: 'cr\xe8me anglaze, walnut brittle'
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
        name: 'Ocean garden shrimp + scallop \u201cpotato crusted\u201d',
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
        name: 'Clare Isle organic salmon \u201cblood orange cured\u201d',
        course: 'First Course',
        desc: ', endive, \u201ccandy\u201d red onion champagne vinegar'
      },
      {
        name: 'Chicken fired pork belly \u201ccaesar salad\u201d',
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
        desc: 'corn grits, dandelion greens, buttermilk fired okra \u201cpopper\u201d'
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
]);'use strict';
angular.module('core').controller('XeditableController', [
  '$scope',
  'Authentication',
  '$q',
  '$http',
  function ($scope, Authentication, $q, $http) {
    $scope.authentication = Authentication;
    $scope.titles = [{
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: ''
      }];
    $scope.auth = {
      id: 1,
      name: 'awesome auth'
    };
    $scope.updateAuth = function (data) {
      return $http.post('/', {
        id: $scope.auth.id,
        name: data
      });
    };  // $scope.items = [
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
]);'use strict';
//Menu service used for managing  menus
angular.module('core').service('Menus', [function () {
    // Define a set of default roles
    this.defaultRoles = ['user'];
    // Define the menus object
    this.menus = {};
    // A private function for rendering decision 
    var shouldRender = function (user) {
      if (user) {
        for (var userRoleIndex in user.roles) {
          for (var roleIndex in this.roles) {
            if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
              return true;
            }
          }
        }
      } else {
        return this.isPublic;
      }
      return false;
    };
    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exists');
        }
      } else {
        throw new Error('MenuId was not provided');
      }
      return false;
    };
    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      return this.menus[menuId];
    };
    // Add new menu object by menu id
    this.addMenu = function (menuId, isPublic, roles) {
      // Create the new menu
      this.menus[menuId] = {
        isPublic: isPublic || false,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      };
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      delete this.menus[menuId];
    };
    // Add menu item object
    this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Push new menu item
      this.menus[menuId].items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || '/' + menuItemURL,
        isPublic: isPublic || this.menus[menuId].isPublic,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      });
      // Return the menu object
      return this.menus[menuId];
    };
    // Add submenu item object
    this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: menuItemTitle,
            link: menuItemURL,
            uiRoute: menuItemUIRoute || '/' + menuItemURL,
            isPublic: isPublic || this.menus[menuId].isPublic,
            roles: roles || this.defaultRoles,
            shouldRender: shouldRender
          });
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    //Adding the topbar menu
    this.addMenu('topbar');
  }]);'use strict';
// Configuring the Articles module
angular.module('foods').run([
  'Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', 'Menus', 'foods', 'dropdown', '/foods(/create)?');
    Menus.addSubMenuItem('topbar', 'foods', 'List Menus', 'foods');
    Menus.addSubMenuItem('topbar', 'foods', 'Add New Menu', 'foods/create');
  }
]);'use strict';
//Setting up route
angular.module('foods').config([
  '$stateProvider',
  function ($stateProvider) {
    // Foods state routing
    $stateProvider.state('listFoods', {
      url: '/foods',
      templateUrl: 'modules/foods/views/list-foods.client.view.html'
    }).state('createFood', {
      url: '/foods/create',
      templateUrl: 'modules/foods/views/create-food.client.view.html'
    }).state('viewFood', {
      url: '/foods/:foodId',
      templateUrl: 'modules/foods/views/view-food.client.view.html'
    }).state('editFood', {
      url: '/foods/:foodId/edit',
      templateUrl: 'modules/foods/views/edit-food.client.view.html'
    });
  }
]);'use strict';
// Foods controller
angular.module('foods').controller('FoodsController', [
  '$scope',
  '$stateParams',
  '$location',
  'Authentication',
  'Foods',
  function ($scope, $stateParams, $location, Authentication, Foods) {
    $scope.authentication = Authentication;
    // Create new Food
    $scope.create = function () {
      // Create new Food object
      var food = new Foods({
          name: this.name,
          desc: this.desc
        });
      // Redirect after save
      food.$save(function (response) {
        $location.path('foods/' + response._id);
        // Clear form fields
        $scope.name = '';
        $scope.desc = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    // Remove existing Food
    $scope.remove = function (food) {
      if (food) {
        food.$remove();
        for (var i in $scope.foods) {
          if ($scope.foods[i] === food) {
            $scope.foods.splice(i, 1);
          }
        }
      } else {
        $scope.food.$remove(function () {
          $location.path('foods');
        });
      }
    };
    // Update existing Food
    $scope.update = function () {
      var food = $scope.food;
      food.$update(function () {
        $location.path('foods/' + food._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    // Find a list of Foods
    $scope.find = function () {
      $scope.foods = Foods.query();
    };
    // Find existing Food
    $scope.findOne = function () {
      $scope.food = Foods.get({ foodId: $stateParams.foodId });
    };
    $scope.orightml = '<h4 align="left">this is H4</h4><h3 align="left">this is H3</h3><p align="left">this is P</p>';
    $scope.desc = $scope.orightml;
  }
]);'use strict';
//Foods service used to communicate Foods REST endpoints
angular.module('foods').factory('Foods', [
  '$resource',
  function ($resource) {
    return $resource('foods/:foodId', { foodId: '@_id' }, { update: { method: 'PUT' } });
  }
]);'use strict';
// Config HTTP Error Handling
angular.module('users').config([
  '$httpProvider',
  function ($httpProvider) {
    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push([
      '$q',
      '$location',
      'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
            case 401:
              // Deauthenticate the global user
              Authentication.user = null;
              // Redirect to signin page
              $location.path('signin');
              break;
            case 403:
              // Add unauthorized behaviour 
              break;
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);'use strict';
// Setting up route
angular.module('users').config([
  '$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider.state('profile', {
      url: '/settings/profile',
      templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
    }).state('password', {
      url: '/settings/password',
      templateUrl: 'modules/users/views/settings/change-password.client.view.html'
    }).state('accounts', {
      url: '/settings/accounts',
      templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
    }).state('signin', {
      url: '/signin',
      templateUrl: 'modules/users/views/signin.client.view.html'
    });
  }
]);'use strict';
angular.module('users').controller('AuthenticationController', [
  '$scope',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    //If user is signed in then redirect back home
    if ($scope.authentication.user)
      $location.path('/');
    $scope.signup = function () {
      $http.post('/auth/signup', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    $scope.signin = function () {
      $http.post('/auth/signin', $scope.credentials).success(function (response) {
        //If successful we assign the response to the global user model
        $scope.authentication.user = response;
        //And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
angular.module('users').controller('SettingsController', [
  '$scope',
  '$http',
  '$location',
  'Users',
  'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;
    // If user is not signed in then redirect back home
    if (!$scope.user)
      $location.path('/');
    // Check if there are additional accounts 
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }
      return false;
    };
    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || $scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider];
    };
    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;
      $http.delete('/users/accounts', { params: { provider: provider } }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    // Update a user profile
    $scope.updateUserProfile = function () {
      $scope.success = $scope.error = null;
      var user = new Users($scope.user);
      user.$update(function (response) {
        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };
    // Change user password
    $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null;
      $http.post('/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
// Authentication service for user variables
angular.module('users').factory('Authentication', [function () {
    var _this = this;
    _this._data = { user: window.user };
    return _this._data;
  }]);'use strict';
// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', [
  '$resource',
  function ($resource) {
    return $resource('users', {}, { update: { method: 'PUT' } });
  }
]);