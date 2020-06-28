const nodeDetails = (node, spaceCount = 0) => {
	let details = `${node.nodeType} ${node.nodeName} ${node.nodeValue} `;
	return details.padStart(details.length + spaceCount, ' ');
}

const nodeDetailsWithChildren = (node, spaceCount = 0) => {
	console.log(nodeDetails(node, spaceCount));

	let nodeChild = node.firstChild;
	spaceCount += 1;

	while (nodeChild) {
		console.log(nodeDetailsWithChildren(nodeChild, spaceCount));
		nodeChild = nodeChild.nextSibling;
	}

	spaceCount -= 1;
}

const nodeList = document.querySelector('html');

nodeDetailsWithChildren(nodeList);
