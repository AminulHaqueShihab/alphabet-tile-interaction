export const replaceConsecutiveLetters = (str: string): string => {
	return str.replace(/(.)\1{2,}/g, '_');
};
