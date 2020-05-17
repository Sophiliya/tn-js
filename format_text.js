const lineLength = 9;

let text = prompt('Enter text:', '');
let words = text.split(' ');
let linesAll = [];
let line = words[0];

for(let i = 1; i < words.length; i++) {
	if ((line + ' ' + words[i]).length < lineLength) {
		line += ' ' + words[i];
	} else {
		linesAll.push(line + '\n');
		line = words[i];
	}

	if (i === words.length - 1) { linesAll.push(line + '\n') }
}

let newText = linesAll.join('');
console.log(newText);