'use strict';

module.exports = {
	app: {
		title: 'East End Eatz | Pittsburgh Catering + Chef Services',
		description: 'Event catering and private chef services in Pittsburgh headquartered in Pittsburgh\'s East End. Featuring options for meal delivery, small batch cooking, and using locally produced, organic ingredients.',
		keywords: 'Pittsburgh Catering, Pittsburgh Caterers, Prive Chefs Pittsburgh,  Catering Pittsburgh, Event Catering Pittsburgh, Private Chef Services Pittsburgh, Chef Sean Kelly Pittsburgh, Local caterers Pittsburgh, East end catering, Catering 412, Chef Services 412, Pittsburgh Chef, Top Caterers in Pittsburgh, Top Private Chef Pittsburgh'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'https://fonts.googleapis.com/css?family=Playfair+Display',
				'//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
				'https://fonts.googleapis.com/css?family=Muli'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-xeditable/dist/js/xeditable.js',
				'http://cdn.jsdelivr.net/g/angular.textangular@1.2.2(textAngular-sanitize.min.js+textAngular.min.js)'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};