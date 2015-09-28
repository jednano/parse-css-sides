var tape = require('tape');

var parseSides = require('..');

tape('parse-css-sides', function(t) {

	t.throws(
		function() {
			parseSides('');
		},
		/No sides to parse/,
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

	t.throws(
		function() {
			parseSides('1 2 3 4 5');
		},
		/Cannot parse 5 sides/,
		'throws when 5 sides are provided'
	);

	t.end();
});
