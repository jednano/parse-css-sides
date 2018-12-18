import parseSides from '.'

import requiredSides = require('.')

describe('parse-css-sides', () => {

	it('exports the same object for commonjs as the TypeScript export default', () => {
		expect(requiredSides).toBe(parseSides)
		expect(requiredSides.default).toBe(parseSides)
	})

	it('throws when passed an empty value', () => {
		expect(() => parseSides('')).toThrowError('Cannot parse 0 sides')
	})

	it('parses 1 value', () => {
		expect(parseSides('0')).toEqual({
			bottom: '0',
			left: '0',
			right: '0',
			top: '0',
		})
	})

	it('parses 1 value with !important', () => {
		expect(parseSides('0 !important')).toEqual({
			bottom: '0',
			important: true,
			left: '0',
			right: '0',
			top: '0',
		})
	})

	it('parses 2 values', () => {
		expect(parseSides('0 1')).toEqual({
			bottom: '0',
			left: '1',
			right: '1',
			top: '0',
		})
	})

	it('parses 2 values with !important', () => {
		expect(parseSides('0 1 !important')).toEqual({
			bottom: '0',
			important: true,
			left: '1',
			right: '1',
			top: '0',
		})
	})

	it('parses 3 values', () => {
		expect(parseSides('0 1 2')).toEqual({
			bottom: '2',
			left: '1',
			right: '1',
			top: '0',
		})
	})

	it('parses 3 values with !important', () => {
		expect(parseSides('0 1 2 !important')).toEqual({
			bottom: '2',
			important: true,
			left: '1',
			right: '1',
			top: '0',
		})
	})

	it('parses 4 values', () => {
		expect(parseSides('0 1 2 3')).toEqual({
			bottom: '2',
			left: '3',
			right: '1',
			top: '0',
		})
	})

	it('parses 4 values with !important', () => {
		expect(parseSides('0 1 2 3 !important')).toEqual({
			bottom: '2',
			important: true,
			left: '3',
			right: '1',
			top: '0',
		})
	})

	it('preserves functions with spaces and commas inside', () => {
		expect(
			parseSides('fn(a, b) fn(\'c d\', e) fn(f, g) fn(h, "i j", k)'),
		).toEqual({
			bottom: 'fn(f, g)',
			left: 'fn(h, "i j", k)',
			right: 'fn(\'c d\', e)',
			top: 'fn(a, b)',
		})
	})

	it('throws when 5 sides are provided', () => {
		expect(() => parseSides('1 2 3 4 5')).toThrowError('Cannot parse 5 sides')
	})
})
