'use strict';

module.exports = {
	app: {
		title: 'East-End Eatz | 412',
		description: 'home-delivered meals, private chef, meal delivery, food-to-go, Pittsburgh, PA',
		keywords: 'food delivery, private chef, in-home chef, Pittsburgh, East End Pittsburgh, Shadyside, Squirrel Hill, Fox Chapel, Oakmont'
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