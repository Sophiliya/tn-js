let selectedColorBlock = document.getElementsByClassName('choosen')[0];
let currentColor = selectedColorBlock.dataset.code;

const createTable = (size) => {
	const table = document.createElement("table");

	for (let trIndex = 0; trIndex < size; trIndex++) {
		const tr = document.createElement("tr");

		for (let tdIndex = 0; tdIndex < size; tdIndex++) {
		  const td = document.createElement("td");
		  tr.append(td);
		}

		table.append(tr);
	}

	return table;
};

const selectColor = (e) => {
	if (!e.target.classList.contains('color-block')) return;

	if (selectedColorBlock) {
		selectedColorBlock.classList.remove('choosen');
	}

	selectedColorBlock = e.target;
	selectedColorBlock.classList.add('choosen');

	currentColor = `#${e.target.dataset.code}`;
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

const table = createTable(28);
document.getElementById("container").prepend(table);

const colorsBlock = document.getElementById("colorSelector");

colorsBlock.addEventListener('click', selectColor);
table.addEventListener("mouseover", handleDrawing);

