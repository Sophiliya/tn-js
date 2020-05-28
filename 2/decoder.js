// const keyCodeA = 'a'.charCodeAt(0);
// let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

// let text = `Back in the good old days | the "Golden Era" of Computers, it was easy 
// to separate the men from the boys (sometimes called "Real Men" and "Quiche
// Eaters" in the literature). During this period, the Real Men were the ones
// that understood computer programming, and the Quiche Eaters were the ones
// that didn't.`;
// text = text.toLocaleLowerCase();
// let encoded = '';

// for (let index = 0; index < text.length; index++) {
//     let code = text.charCodeAt(index) - keyCodeA;
//     if (code < 0 || code >= 26)
//         encoded += ' ';
//     else
//         encoded += key[code];
// }

// console.log(encoded);

const keyCodeA = 'a'.charCodeAt(0);
let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';
let encoded = `qsnx gh yib uffz ftz zslj   yib  uftzbh bcs  fe nfmpoybcj  gy ksj bsjl  yf jbpscsyb yib mbh ecfm yib 
qflj  jfmbygmbj nsttbz  cbst mbh  shz  dognib bsybcj  gh yib tgybcsyocb   zocghu yigj pbcgfz  yib cbst mbh kbcb yib 
fhbj yisy ohzbcjyffz nfmpoybc pcfucsmmghu  shz yib dognib bsybcj kbcb yib fhbj yisy zgzh y`;
let text = '';

for (let i = 0; i < encoded.length; i++) {
	let code = key.indexOf(encoded[i]);
	if (code < 0) {
		text += ' ';
	} else {
		let keyCodeChar = code + keyCodeA;
		text += String.fromCharCode(keyCodeChar);
	} 
}

console.log(text);
