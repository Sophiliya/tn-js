'use strict';

function Student(fullname) {
	let _healthy = true;
	let names = fullname.split(' ');

	this.name = names[0];
	this.middleName = names[1];
	this.surname = names[2];

	this.fullname = () => {
		return `${this.name} ${this.middleName} ${this.surname}`;
	}

	this.surnameWithInitials = () => {
		return `${this.surname} ${this.name[0].toUpperCase()}.${this.middleName[0].toUpperCase()}.`;
	}

	this.isHealthy = () => {
		return _healthy;
	}

	this.makeSick = () => {
		_healthy = false;

		return true;
	}
}
