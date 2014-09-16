'use strict';

module.exports = {
	app: {
		title: 'East End Eatz | 412 Catering + Chef Services',
		description: 'Event catering and private chef services in Pittsburgh headquartered in the East End. Featuring options for meal delivery, small batch cooking, and using locally produced, organic ingredients.',
		keywords: 'Event Catering Pittsburgh, Private Chef Services Pittsburgh, Chef Sean Kelly Pittsburgh, Local catering Pittsburgh, East end catering, 412 Catering, 412 Chef Services'
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
				'//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
				'https://fonts.googleapis.com/css?family=Muli'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
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