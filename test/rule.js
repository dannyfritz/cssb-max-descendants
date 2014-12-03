var test = require('tape');
var cssb = require('css-bouncer');
var fixtures = require('./fixtures/css');

test('maximum descendants rule tested', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {maximum: 3});
	var result = linter.lint(fixtures.long);
	t.equal(result.length, 1, 'One error should happen.');
	t.end();
});

test('maximum descendants rule no error', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {maximum: 3});
	var result = linter.lint(fixtures.short);
	t.equal(result.length, 0, 'No error should happen.');
	t.end();
});
