function sumOfPositive(numbers) {
	try {
		if (!Array.isArray(numbers))
		throw new Error('Argument must be an array of numbers.');

		if (numbers.length === 0)
			return { count: 0, sum: 0 };

		if (numbers.filter(item => Number.isNaN(parseInt(item))).length > 0)
			throw new Error('Array must contain number values only.');

		const positive = numbers.filter(number => number > 0);
		const sum = positive.reduce((sum, number) => sum + number, 0);

		return { count: positive.length, sum: sum }
	} catch(e) {
		return e.message 
	}
}

sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);