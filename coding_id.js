// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// A метка времени (timestamp в секундах)
// B кластер
// C тип
// D идентификатор пользователя
// Все входные данные - целые десятичные числа

let timestamp = 534338789;
let claster   = 88;
let type      = 9;
let user      = 123456;

const a = timestamp.toString(16);
const b = claster.toString(16);
const c = type.toString(16);
const d = user.toString(16);

const id = a + b + c + d;

console.log(id);