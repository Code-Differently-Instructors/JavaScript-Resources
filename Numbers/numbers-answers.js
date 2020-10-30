1. let number1 = prompt("Enter a number");

let num1 = parseInt(number1);

let number2 = prompt("Enter another number");

let num2 = parseInt(number2);

3. let total;

5. total = num1 + num2;

document.write(total);

total = num1 - num2;

document.write(total);

total = num1 * num2;

document.write(total);

total = num1 / num2;

document.write(total);

total = num1 ** num2;

document.write(total);

total = num1 % num2;

document.write(total);

7. 
let num = Math.floor(Math.random() * 35);

console.log(num);

9. 

let input = prompt("Give a floating point number. Ex 3.234");

let number = Math.ceil(input);

let result = alert("Your number was rounded up to " + number );

11.

let input = prompt("Give a floating point number. Ex 3.234");

let number = Math.floor(input);

let result = alert("Your number was rounded down to " + number );


13. 

let number1 = prompt("Enter a number");

let num1 = parseInt(number1);

let number2 = prompt("Enter another number");

let num2 = parseInt(number2);

let power = Math.pow(num1, num2);

alert("The result is " + power + ". "+ num1 + " to the " + num2 + "th power.");


// Bonus

17. 

function squared(b) {
  return b * b;
}

19. 

function and(a,b){
    if (a === true && b === true){
        return true;
    } else {
        false;
    }
}

21. 

function has_bugs(buggyCode) {
if (buggyCode == true) {
	return 'Sad days';
} else {
	return 'It is a good day';
    }
}

23. 

function dividesEvenly(a, b) {
	if (a % b === 0) {
		return true;
	} else {
		return false;
	}
}