/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean} lower Whether all other letters should be lowercased
 * @return {string}
 */
export const capitalize = (str: string, lower: boolean = true): string =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())