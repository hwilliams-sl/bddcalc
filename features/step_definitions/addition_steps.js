const Calculator = require('../../lib/calculator');
const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');

let calculator;

Given('the numbers {int} and {int}', function (x, y, callback) {
	calculator = new Calculator(x, y);
	callback();
	});

When('they are added together', function () {
	calculator.add();
	});
	

Then('the result should be {int}', function (expected) 
{assert.equal(calculator.getResult(), expected);
     });
