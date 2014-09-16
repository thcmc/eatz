'use strict';

module.exports = {
	db: 'mongodb://tmh144429:F1la50won@ds053597.mongolab.com:53597/eastendeatz',
	app: {
		title: 'East End Eatz | 412 Catering + Chef Services'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1465793930360291',
		clientSecret: process.env.FACEBOOK_SECRET || '8766c50032a2eae98146ef4aa30993de',
		callbackURL: 'http://www.eastendeatz.com/#!/auth'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};