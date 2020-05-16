let text = prompt('Enter text:', '');
let modifiedText = text.split(' ').filter(char => char != '').join(' ');

console.log(modifiedText);