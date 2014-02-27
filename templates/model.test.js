var assert = require('assert');


/**
 * Mocha tests for <%= globalId %>
 *
 * @model <%= identity %>
 * @testFramework mocha
 */
describe('<%= globalId %> (model)', function () {

	it('should exist', function () {
		assert(<%= globalId %>);
		assert(sails.models.<%= identity %>);
	});

	describe('create()', function () {
		it('should create a record');
	});
	describe('update()', function () {
		it('should update a record');
	});
	describe('destroy()', function () {
		it('should destroy a record');
	});
	describe('find()', function () {
		it('should return a record');
	});

	// ...
	// tests for other model class methods
	// ...

});
