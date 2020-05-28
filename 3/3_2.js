const wordsCodesSum = text => {
	if (!text) { return }

	let words = text.split(' ');
	let codes = words.map(word => {
		let sum = 0;
		for(let i in word) {
			sum += word.charCodeAt(i);
		}

		return { word: word, sum: sum }
	});

	return codes; 
}

console.log(wordsCodesSum('Lorem ipsum dolor sit amet.'));