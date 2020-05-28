function wordStat(text) {
	try {
		if (typeof(text) !== 'string')
			throw new Error('Argument must be a string.');

		if (!text.trim()) 
			throw new Error('Argument is empty.');

		let words = text.split(' ').filter(char => !!char);
		let codes = words.map(word => {
			let sum = 0;
			for(let i in word) {
				sum += word.charCodeAt(i);
			}

			return { word: word, sum: sum }
		});

		return codes;
	} catch(e) {
		return e.message;
	}
}

wordStat('Lorem ipsum dolor sit amet.');