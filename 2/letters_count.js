let text = prompt('Enter text:', '');
let vowelsCount = 0;
let consonantsCount = 0;

for(let char of text) {
	if ('aeiou'.includes(char))
		vowelsCount += 1;
	else if (/[A-Za-z]/.test(char))
		consonantsCount += 1;
}

console.log('Number of vowels in text is ' + vowelsCount);
console.log('Number of consonants in text is ' + consonantsCount);

