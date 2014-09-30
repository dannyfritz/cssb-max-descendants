var test = require('tape');
var cssb = require('css-bouncer');

test('maximum descendants rule tested', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {maximum: 3});
	var result = linter.lint('div .class #id > ul > li.class {}');
	console.log(result);
	t.equal(result.length, 1, 'One error should happen.');
	t.end();
});

test('maximum descendants rule no error', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {maximum: 3});
	var result = linter.lint('div .class #id{}');
	console.log(result);
	t.equal(result.length, 0, 'No error should happen.');
	t.end();
});
