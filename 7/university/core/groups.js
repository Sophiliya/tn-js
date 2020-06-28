'use strict';

function Group(number) {
	this.number   = number;
	this.students = [];

	this.absentStudents = () => {
		let absentStudents = [];

		for(let student of this.students) {
			if (!student.isHealthy())
				absentStudents.push(student);
		}

		return absentStudents;
	}
} 
