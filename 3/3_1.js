const negativesCount = numbers => {
	if (!Array.isArray(numbers) || numbers.length === 0) { return }

	const negative = numbers.filter(number => number < 0);
	const sum = negative.reduce((sum, number) => sum + number);

	return { count: negative.length, sum: sum }
}

console.log(negativesCount([91, 93, 45, -67, -96, -40, 34, -96, 42, -58]));