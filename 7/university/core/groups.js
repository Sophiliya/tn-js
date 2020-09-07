'use strict';

function Group(number) {
	this.number   = number;
	this.students = [];

	this.absentStudents = () => {
		return this.students.filter(
			student => !student.isHealthy()
		);
	}
} 
