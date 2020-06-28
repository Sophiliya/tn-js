'use strict';

const dock1 = new Dock({x: 10, y: 10});
const dock2 = new Dock({x: 25, y: 45});
sea.docks.push(dock1, dock2);

console.log('Dock 1', 'position: ', dock1.position(), 'ships: ', dock1.ships);
console.log('Dock 2', 'position: ', dock2.position(), 'ships: ', dock2.ships);

const ship1 = new Ship('Navigator', 'Passenger', {x: 10, y: 10});
const ship2 = new Ship('Seven Seas', 'Passenger', {x: 30, y: 20});
sea.ships.push(ship1, ship2);

console.log(ship1.name, ship1.position);
console.log(ship2.name, ship2.position);

const dock1Position = dock1.position();
const dock2Position = dock2.position();

console.log(ship1.name + ' moves' + ' to the north:');
ship1.move('n');
console.log(ship1.name, 'distance: ', ship1.distance, 'new position: ', ship1.position);

console.log(ship1.name + ' moves to Dock 1: ', dock1Position);
ship1.moveTo(dock1Position);
console.log(ship1.name, 'distance: ', ship1.distance, 'new position: ', ship1.position);

console.log('Dock 1 moors ' + ship1.name);
dock1.moor(ship1);
console.log('Dock 1', 'position: ', dock1.position(), 'ships: ', dock1.ships);
console.log('Is anchor of ' + ship1.name + ' dropped? ', ship1.isAnchorDroped());

console.log('Dock 1 unmoors ' + ship1.name);
dock1.unmoor(ship1);
console.log('Is anchor of ' + ship1.name + ' dropped? ', ship1.isAnchorDroped());

