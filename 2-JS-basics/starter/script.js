/**
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

// Single line comment
/*
Multi
line
comment
*/

/**
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**
* Basic operators
*/

var currentYear, yearJohn, yearMark, ageJohn, ageMark
currentYear = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

// Math operators
console.log(yearJohn);
console.log(yearMark);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);





























