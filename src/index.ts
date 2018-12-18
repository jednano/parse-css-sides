import { splitBySpaces } from 'css-list-helpers'

export interface ISides {
	top: string
	right: string
	bottom: string
	left: string
	important?: boolean
}

/**
 * Parses CSS sides (e.g., the value of `margin`, `padding` and `border` declarations).
 */
export default function parseSides(
	/**
	 * The CSS sides to parse (e.g., `0 5% 10px !important`).
	 */
	value: string,
): ISides {

	const sides = splitBySpaces(value)
	const pos = sides.lastIndexOf('!important')
	const important = pos !== -1
	if (important) {
		sides.splice(pos, 1)
	}

	const numberOfSides = sides.length
	if (numberOfSides < 1 || numberOfSides > 4) {
		throw new Error(`Cannot parse ${numberOfSides} sides`)
	}

	const [first, ...rest] = sides
	return createSides(first, ...rest)

	function createSides(
		top: string,
		right: string = top,
		bottom: string = top,
		left: string = right,
	) {
		return {
			bottom,
			left,
			right,
			top,
			...(important ? { important } : {}),
		}
	}
}

// @ts-ignore
exports.default.default = module.exports = exports.default
