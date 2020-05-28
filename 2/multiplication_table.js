for(let i = 1; i <= 10; i++) {
	let line = [i.toString().padStart(4, ' ')];

	for(let j = 1; j <= 10; j++){
		line.push((i * j).toString().padStart(4, ' ')); 
	}

	console.log(`${line.join('')}\n`)
}