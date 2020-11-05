![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript

# Table of Content

- [Javascript](#javascript)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [What is Javascript?](#what-is-javascript)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [Alert Messages](#alert-messages)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
    - [Instructor Explains/Demonstrate](#instructor-explainsdemonstrate)
      - [Functions in Javascript](#functions-in-javascript)
    - [Instructor Explains/Demonstrate](#instructor-explainsdemonstrate-1)
      - [Javascript Data Types](#javascript-data-types)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [Javascript Strings](#javascript-strings)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [Javascript Numbers](#javascript-numbers)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-4)
      - [Javascript Booleans](#javascript-booleans)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-5)
      - [Javascript Arrays](#javascript-arrays)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-6)
      - [Javascript Undefined](#javascript-undefined)
    - [Next Step](#next-step)

## Objectives

- Define what Javascript is.
- Alert Messages.
- Functions in Javascript.


## About

In this unit, you will learn what Javascript is all about. You will also learn how to display an alert message on your page as well as how to perform different functions using Javascript.


## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### What is Javascript?

JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience.

JavaScript allows you to take ordinary web elements and make them interactive. It can be used alongside your HTML and CSS and is an extremely important tool for any web developer.


### Instructor Explains/Demonstrates

#### Alert Messages

An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

You can add a button to your webpage by the ```<button>``` tag, followed by an onClick attribute which is linked to a function that is created. 

To add JavaScript in an HTML file, you can use the tag called ```<script>```.

Another way to add JavaScript to an HTML file is to reference it from an external CSS file. 
```js
<script src = "js/script.js"></script>
```
For the code above, you would have to utilize an external javascript file called ```script.js```. 

Below is an example of how the script.js file would look to display an alert message:
```js
alert("Hello world");
```
Below is an example of a simple Try it button:
```html
<script>
function myFunction() {
alert(location.hostname);
}
</script>
```

The alert function allows an alert to appear on screen once you click the button in this case.


#### Junior Devs Demonstrate

Create an alert message that introduces the user to your page.

### Instructor Explains/Demonstrate

#### Functions in Javascript

The one cool thing that Javascript allows you to do is to perform functions. If by any chance you wanted to find out what 8 + 4 was, you can find the answer using Javascript.

By right clicking a page and going to the console, you are able to perform multiple things such as functions, operations, displaying messages to the screen, etc.


### Instructor Explains/Demonstrate

#### Javascript Data Types

JavaScript variables can hold many data types: numbers, strings, objects and more:

```js
var length = 16;              // Number
var lastName = "Johnson";     // String
var x = {firstName:"John"};   // Object
```

### Instructor Explains/Demonstrates

#### Javascript Strings

A string (or a text string) is a series of characters like "John Doe". 

Strings are written with quotes. You can use single or double quotes:
```js
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes
```
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

### Instructor Explains/Demonstrates

#### Javascript Numbers

JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:
```js
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
```

### Instructor Explains/Demonstrates

#### Javascript Booleans

Booleans can only have two values: ``true`` or ``false``.
```js
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```

### Instructor Explains/Demonstrates

#### Javascript Arrays

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called ``cars``, containing three items (car names):

```js
var cars = ["Saab", "Volvo", "BMW"];
```

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.


### Instructor Explains/Demonstrates

#### Javascript Undefined 

In JavaScript, a variable without a value, has the value ``undefined``. The type is also ``undefined``.

```js
var car;    // Value is undefined, type is undefined
```

### Next Step

Play around the Javascript. Attempt to try the following:
1. Print a string that says ``("Welcome to my page!)``
2. Print a number between 1-10.
3. Print a one Boolean that is true and another that is false.
4. Create and print an array of your favorite artists.