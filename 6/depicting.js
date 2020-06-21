let selectedColorBlock = document.getElementsByClassName('choosen')[0];
let currentColor = selectedColorBlock.dataset.code;

const createTable = (size) => {
	const table = document.createElement("table");

	for (trIndex = 0; trIndex < size; trIndex++) {
		const tr = document.createElement("tr");

		for (tdIndex = 0; tdIndex < size; tdIndex++) {
		  const td = document.createElement("td");
		  tr.append(td);
		}

		table.append(tr);
	}

	return table;
};

const selectColor = (e) => {
	if (!e.target.className.includes('color-block')) return;

	if (selectedColorBlock) {
		selectedColorBlock.classList.remove('choosen');
	}

	selectedColorBlock = e.target;
	selectedColorBlock.classList.add('choosen');

	currentColor = `#${e.target.dataset.code}`;
	console.log('Current color:', currentColor);
};

const handleDrawing = (e) => {
	if (e.target.tagName !== "TD") return;

	if (e.shiftKey) {
		e.target.style.backgroundColor = currentColor;
	}

	if (e.ctrlKey) {
		e.target.style.backgroundColor = 'transparent';
	}
}

document.getElementById("container").append(createTable(28));

const colorsBlock = document.getElementById("colorSelector");
const table = document.getElementsByTagName('table')[0];

colorsBlock.addEventListener('click', selectColor);
table.addEventListener("mouseover", handleDrawing);

