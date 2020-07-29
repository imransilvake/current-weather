/**
 * add letter spacing
 * @param str
 * @param spaces
 * @returns {string}
 */
const addLetterSpacing = (str, spaces) => {
	const fillSpaces = Array(spaces).fill('\xa0').join('');
	return str.split('').join(fillSpaces);
};
export default addLetterSpacing;
