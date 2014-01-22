/**
 * sails-generate-test
 *
 * Usage:
 * `sails generate test`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-test) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

