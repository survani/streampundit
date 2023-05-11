//Helps generate a random number...
export const randomNumber = (min: number, max: number, seed: number) => {
	return Math.floor(min + (max - min) * seed);
};
