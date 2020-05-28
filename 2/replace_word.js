function replace_word(text) {
	const a = 'Java';
	const b = 'JS';
	const c = 'overloading';
	let text = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++.'

	let sentences = text.split('.');

	for(let i = 0; i < sentences.length; i++) {
		if (sentences[i].includes(c)) 
			sentences[i] = sentences[i].replace(a, b);
	}

	return sentences.join('.');
}