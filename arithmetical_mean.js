let numbers = [];
let number; 
let avg;

do {
	number = parseFloat(prompt('Введите число:', ''));
	if (number) {
		numbers.push(number);
		avg = numbers.reduce((a, b) => a + b, 0)/numbers.length;
		console.log('Среднее арифметическое чисел равно: ' + avg);
	}

} while (number);

alert('Среднее арифметическое чисел равно: ' + avg);