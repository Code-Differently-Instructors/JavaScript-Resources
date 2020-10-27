![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Functions

# Table of Content

- [Javascript Functions](#javascript-functions)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [Functions](#functions)
      - [Function Declaration](#function-declaration)
      - [Junior Developers Demonstrate](#junior-developers-demonstrate)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [Functions With Parameters](#functions-with-parameters)
      - [Junior Developers Demonstrate](#junior-developers-demonstrate-1)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [Functions: Declarations vs Expressions](#functions-declarations-vs-expressions)
      - [Junior Developers Demonstrate](#junior-developers-demonstrate-2)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
        - [Variable Scope](#variable-scope)
        - [Local Scope](#local-scope)
        - [Global Scope](#global-scope)
      - [Junior Developers Demonstrate](#junior-developers-demonstrate-3)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-4)
      - [Arrow Functions](#arrow-functions)
      - [Junior Developers Demonstrate](#junior-developers-demonstrate-4)
  - [Next Steps](#next-steps)

## Objectives

- Define a JavaScript function.
- Understand function syntax.
- Write traditional and arrow functions.
- Know difference between a declaration and an expression.
- Understand the variable scope.
- How to invoke a function.

## About

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it). At the core of it, a function is made up of instructions that a developer wants to run repeatedly.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### Functions

Traditionally, a function is defined with the `function` keyword, followed by a name and parentheses `()`. Function names can consist of letters, digits, underscores, and dollar signs embodying the same rules as variables.

#### Function Declaration

```js
function sayHello() {
  console.log("Hello, welcome to Code Differently!");
}

// Calling function
sayHello(); // 0utputs: Hello, welcome to Code Differently!
```

#### Junior Developers Demonstrate

Create function that incorporates your motto and call it to the console.

### Instructor Explains/Demonstrates

#### Functions With Parameters

You can write parameters when you define your function to accept input values at run time.

```js
function sayHello(name = "Guest") {
  console.log("Hello, " + name);
}
sayHello(); // 0utputs: Hello, Guest
sayHello("Roger"); // 0utputs: Hello, Roger
```

#### Junior Developers Demonstrate

Create a function with a parameter and call it to the console.

### Instructor Explains/Demonstrates

#### Functions: Declarations vs Expressions

_Function declarations define functions without assigning them to variables._

```js
function answer(x, y) {
  let sum = x + y;
  return sum;
}
```

_Function expressions assign anonymous functions to variables._

```js
let answer = function (x, y) {
  let sum = x + y;
  return sum;
};
console.log(answer(5, 10)); // 0utputs: 15

let total = answer(7, 25);
console.log(total); // 0utputs: 32
```

#### Junior Developers Demonstrate

Create a function declaration and expression, call both to the console.

### Instructor Explains/Demonstrates

##### Variable Scope

With the ability to declare variables anywhere within JavaScript code, the location of the declaration will determine the extent of its use within the code, hence known as the variable scope.

##### Local Scope

Variables declared within a function have local scope, meaning they cannot be viewed or used outside of that function, as shown below:

```js
function greetClass() {
  let welcome = "Hey devs, ready to code!";
  console.log(welcome);
}
greetClass(); // Outputs: Hey devs, ready to code!
console.log(welcome); // Uncaught ReferenceError: greet is not defined
```

##### Global Scope

Variables that are declared outside of a function will have a global scope meaning it availability and use extends to the entire program inside or outside a function.

```js
let welcome = "Hey Devs!";

function greetDevs() {
  console.log(welcome);
}
greetDevs(); // Outputs: Hey Devs!
console.log(welcome); // Outputs: Hey Devs!
```

#### Junior Developers Demonstrate

Create two functions, one with a local scope variable and one with a global scope variable.

### Instructor Explains/Demonstrates

#### Arrow Functions

Arrow functions are a new syntax that allows for defining functions in a more concise way. Lets take a look at how to implement this:

```js
//traditional function declaration
let answer = function (a, b) {
  return a + b;
};
console.log(answer(2, 3)); // 5

// Arrow function
let answer = (a, b) => a + b;
console.log(answer(2, 3)); // 5
```

#### Junior Developers Demonstrate

Turn the following example below into an arrow function.

```js
hello = function () {
  return "Hello World!";
};
```

## Next Steps

Now that you are familiar with functions in javascript, head on over to the [Lab](Functions%20Lab.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
