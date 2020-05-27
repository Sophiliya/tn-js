let sum = 0;
let count = 0;
let number;

do {
	number = prompt('Введите число:', '');
	if (number != '') {
		sum += parseFloat(number);
		count++;
		console.log('Среднее арифметическое чисел равно: ' + sum/count);
	}

} while (number);

alert('Среднее арифметическое чисел равно: ' + sum/count);