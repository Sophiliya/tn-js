let usDate = prompt('Enter date:', '');
let russianDate;

let dateParts = usDate.split('/');
let month = parseInt(dateParts[0]);
let day   = parseInt(dateParts[1]);
let year  = parseInt(dateParts[2]);

let isValidMonth = month > 0 && month <= 12;
let isValidDay   = day > 0 && day <= 31;
let isValidYear  = year > 0

if (isValidMonth && isValidDay && isValidYear) {
	alert(`${day.toString().padStart(2, 0)}.${month.toString().padStart(2, 0)}.${year}`)
}
