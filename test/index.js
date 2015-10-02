var tape = require('tape');

var parseSides = require('..');

tape('parse-css-sides', function(t) {

	t.throws(
		function() {
			parseSides('');
		},
		/Cannot parse 0 sides/,
		'throws when value is empty'
	);

	t.deepEqual(
		parseSides('0'),
		{
			top: '0',
			right: '0',
			bottom: '0',
			left: '0'
		},
		'parses 1 value'
	);

	t.deepEqual(
		parseSides('0 1'),
		{
			top: '0',
			right: '1',
			bottom: '0',
			left: '1'
		},
		'parses 2 values'
	);

	t.deepEqual(
		parseSides('0 1 2'),
		{
			top: '0',
			right: '1',
			bottom: '2',
			left: '1'
		},
		'parses 3 values'
	);

	t.deepEqual(
		parseSides('0 1 2 3'),
		{
			top: '0',
			right: '1',
			bottom: '2',
			left: '3'
		},
		'parses 4 values'
	);

	t.deepEqual(
		parseSides('fn(a, b) fn(\'c d\', e) fn(f, g) fn(h, "i j", k)'),
		{
			top: 'fn(a, b)',
			right: 'fn(\'c d\', e)',
			bottom: 'fn(f, g)',
			left: 'fn(h, "i j", k)'
		},
		'preserves functions with spaces and commas inside'
	);

	t.throws(
		function() {
			parseSides('1 2 3 4 5');
		},
		/Cannot parse 5 sides/,
		'throws when 5 sides are provided'
	);

	t.end();
});
