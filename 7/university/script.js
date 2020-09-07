'use strict';

const group = new Group(1);
university.groups.push(group);

const student1 = new Student('Erast Petrovich Fandorin');
const student2 = new Student('Ivan Pavlovich Petrov');
const student3 = new Student('Vera Ivanovna Isaeva');

university.students.push(student1, student2, student3);
group.students.push(student1, student2, student3);

student2.makeSick();

console.log(university.groups);
console.log(group.students);

for (let student of university.students) {
	console.log(student.fullname(), 'healthy: ' + student.isHealthy());
}

let absentStudents = group.absentStudents();

console.log('Absent students:');
console.log(absentStudents);

for(let student of absentStudents) {
	console.log('Absent student:', student.surnameWithInitials(), 'Is healthy? ', student.isHealthy());
}
