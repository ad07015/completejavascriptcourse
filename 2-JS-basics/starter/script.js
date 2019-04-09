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
/*
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
*/

// Operator precedense
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Mulitple opereators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;

// Grouping
var averageAgeJohnMark = (ageJohn + ageMark) / 2;
console.log(averageAgeJohnMark);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators

x = x * 2;
console.log("x = x * 2: " + x);
x *= 2;
console.log("x *= 2: " + x);
x = x + 1;
console.log(x);
x += 1;
console.log(x);
x++;
console.log(x);
*/

// Coding challenge 1
/*
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

var markBmiHigher = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark);
console.log("John's BMI: " + bmiJohn);
console.log(bmiMark, bmiJohn);
console.log("Is Mark's BMI higher than John's? " + markBmiHigher);
*/

/*****************************
* If / else statement
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'single') {
	console.log(firstName + ' is single');
} else {
	console.log(firstName + ' is married');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' is single');
}

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 78;
heightMark = 1.69;

massJohn = 192;
heightJohn = 1.95;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

var markBmiHigher = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark);
console.log("John's BMI: " + bmiJohn);
console.log(bmiMark, bmiJohn);
if (markBmiHigher) {
	console.log("Mark's BMI is higher than John's");
} else {
	console.log("John's BMI is higher than Mark's");
}
*/

/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 30;

if (age < 13) {
	console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man');
} else {
	console.log(firstName + ' is a man');
}
*/

/*****************************
* The Ternary Operator and Switch Statements
*/
/*
// Ternary operator
var firstName = 'John';
var age = 18;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// Switch statement
var job = 'instructor';

switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an Uber in Lisbon');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else');
}

age = 30;
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man');
		break;
	default:
		console.log(firstName + ' is a man');
}
*/

/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
	console.log('The == operator does type coercion');
}
*/


/*****************************
* Truthy and Falsy values and equality operators
*/

var johnAvgScore, markAvgScore, maryAvgScore;
johnAvgScore = (116 + 95 + 125) / 3;
markAvgScore = (116 + 95 + 125) / 3;
maryAvgScore = (116 + 95 + 125) / 3;

console.log("John's average score: " + johnAvgScore);
console.log("Mark's average score: " + markAvgScore);
console.log("Mary's average score: " + maryAvgScore);
switch (true) {
	case johnAvgScore > markAvgScore && johnAvgScore > maryAvgScore:
		console.log("John's team wins with the average score of " + johnAvgScore);
		break;
	case markAvgScore > johnAvgScore && markAvgScore > maryAvgScore:
		console.log("Mark's team wins with the average score of " + markAvgScore);
		break;
	case maryAvgScore > johnAvgScore && maryAvgScore > markAvgScore:
		console.log("Mary's team wins with the average score of " + maryAvgScore);
		break;
	case johnAvgScore > maryAvgScore && johnAvgScore === markAvgScore:
		console.log("John's and Mark's teams are tied with an average score of " + johnAvgScore);
		break; 
	case johnAvgScore > markAvgScore && johnAvgScore === maryAvgScore:
		console.log("John's and Mary's teams are tied with an average score of " + johnAvgScore);
		break;
	case markAvgScore > johnAvgScore && markAvgScore === maryAvgScore:
		console.log("Mark's and Mary's teams are tied with an average score of " + markAvgScore);
		break;
	default:
		console.log("There is three-way tie!"); 
}
































