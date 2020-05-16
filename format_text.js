const lineLength = 80;

let text = prompt('Enter text:', '');
let lines = [];

for(let i = 0; i < text.length; i += lineLength) {
	lines.push(text.slice(i, i + lineLength));
}

let newText = lines.join('\n');

console.log(newText)




