![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Basics

# Table of Content

- [Javascript Basics](#javascript-basics)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
    - [Variables](#variables)
    - [Strings](#strings)
      - [String Methods](#string-methods)
    - [Comparison and Logical Operators](#comparison-and-logical-operators)
    - [Conditional Statements](#conditional-statements)
  - [Next Steps](#next-steps)

## Objectives

- Declare a JavaScript variable.
- Understand strings and string methods in JavaScript.
- Understand comparison and logical operators.
- Understanding the use of conditional statements.

## About

In this unit you started off with the basics of Javascript. You learned about variables, strings, declarations, comparison operator, and conditionals. This demo will reinforce this knowledge and will help you when you start to complete your labs.

### Variables

A variable is where you store information ranging from strings to numbers and many other things. Lets try creating some variables. Remember we have to use `const` and `let` to declare variables.

- Lets try doing some name variables.
- Declare a first and last name variable with let/const.
- Declare a birthday variable.

Declaring variables with `let` and `const` help avoid errors an find errors in our code.

- `let`: works the similarly to the `var` keyword but it does not allow the same variable to be declared and reassigned a value. This helps protect your variables and their values.

  - `let` keyword also has **Block Scope**. This means that variables declared inside of a block of code, cannot be accessed outside the block.

  - When defining variables with `let` in HTML, the variables **do not** belong to the `window` object.

    - Defining variables with `var` in HTML, the variables belong to the `window` object.  

- `const`: short for constant, which means the value of the variable will not change. It will remain *constant*.

  - Protects the variable's value from being overwritten.

### Strings

A JavaScript string stores a series of characters like `"John Doe"`. A string can be any text inside double or single quotes but they have to match. Also to note that String indexes are zero-based: So the first character is in position 0, the second in 1, and so on.

**Double Quotes**

```js
let petName = “Ollowicious Mumford”
```

**Single Quotes**

```js
let carName = ‘Kia Optima’
```

**Sentence Example**

```js
let welcome = "Hello everyone, welcome to the Code Differently Shop.”
```

#### String Methods

Strings also come with methods. All string methods return a new value. They do not change the original variable. I will list string methods below that we will use for some practice.

<img width="584" alt="Screen Shot 2020-09-10 at 11 25 09 AM" src="https://user-images.githubusercontent.com/54545904/92753899-5364ad80-f358-11ea-83ef-d4ed98cc1b2d.png">

### Comparison and Logical Operators

Comparison and Logical operators are used to test for true or false.

**Comparison Operators**

<img width="727" alt="Screen Shot 2020-09-10 at 1 51 23 PM" src="https://user-images.githubusercontent.com/54545904/92775899-c6781f00-f36c-11ea-8f7b-fed7f9e8c353.png">

**Logical Operators**

<img width="725" alt="Screen Shot 2020-09-10 at 1 51 03 PM" src="https://user-images.githubusercontent.com/54545904/92775887-c2e49800-f36c-11ea-80c6-dcd4cefbc246.png">

### Conditional Statements

Conditional statements are used to perform different actions based on different conditions. Very often when you write code, you want to perform different actions for various decisions. You can use conditional statements in your code to do this. In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true.
- Use `else` to specify a block of code to be executed, if the same condition is false.
- Use `else if` to specify a new condition to test, if the first condition is false.

**Syntax**

```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```

**Example of `if` and `else`**

```js
let hour = 20;
if (hour <= 18) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting2 = "Good evening";
  console.log(greeting2);
}
```

**Example of `else if`**

```js
const drinkingAge = 21;
const answer = prompt("What is your age?");

if (answer <= 12) {
  console.log("A child cannot drink");
} else if (answer <= 20) {
  console.log("A teenager cannot drink");
} else {
  console.log("You’re an adult, enjoy!");
}
```

## Next Steps

Now that you are familiar with the basics of JavaScript, head on over to the [Lab](../JS%20Basics/js-basics-drill.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
