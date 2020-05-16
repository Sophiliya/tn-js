let time = prompt('Enter time:', '');

let timeParts = time.split(/[^A-Za-z0-9]/).filter(item => parseInt(item)); 
let hh = parseInt(timeParts[0]);
let mm = parseInt(timeParts[1]);
let timePartsValid = hh <= 12 && mm <= 59

if (timePartsValid && time.includes('am')) {
	alert(`${timeParts[0].padStart(2, 0)}:${mm.toString().padStart(2, 0)}`)
} else if (timePartsValid && time.includes('pm')) {
	hh = hh == 12 ? 0 : hh + 12;
	alert(`${hh.toString().padStart(2, 0)}:${mm.toString().padStart(2, 0)}`)
} else {
	alert('Enter valid time!')
}
