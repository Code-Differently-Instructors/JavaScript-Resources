![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Basics

# Table of Content

- [Javascript Basics](#javascript-basics)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [Variables](#variables)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [Strings](#strings)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-1)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [String Methods](#string-methods)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-2)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [Comparison and Logical Operators](#comparison-and-logical-operators)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-4)
      - [Conditional Statements](#conditional-statements)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-3)
  - [Next Steps](#next-steps)

## Objectives

- Declare a JavaScript variable.
- Understand strings and string methods in JavaScript.
- Understand comparison and logical operators.
- Understanding the use of conditional statements.

## About

In this unit you started off with the basics of Javascript. You learned about variables, strings, declarations, comparison operator, and conditionals. This demo will reinforce this knowledge and will help you when you start to complete your labs.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### Variables

A variable is where you store information ranging from strings to numbers and many other things. Lets try creating some variables. Remember we have to use `const` and `let` to declare variables.

```js
let dev = "coder";

const firstName = "John";

const name = "john doe";
```

#### Junior Devs Demonstrate

- Declare a first name variable with let.
- Declare a last name variable with var.
- Declare a birthday variable with const.

### Instructor Explains/Demonstrates

#### Strings

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

#### Junior Devs Demonstrate

- Declare a variable with a string value in single quotes.
- Declare a variable with a string value in double quotes.
- Declare a variable with a string value of a sentence in double or single quotes.

### Instructor Explains/Demonstrates

#### String Methods

Strings also come with methods. All string methods return a new value. They do not change the original variable. I will list string methods below that we will use for some practice.

<img width="584" alt="Screen Shot 2020-09-10 at 11 25 09 AM" src="https://user-images.githubusercontent.com/54545904/92753899-5364ad80-f358-11ea-83ef-d4ed98cc1b2d.png">

#### Junior Devs Demonstrate

- Choose five of the string methods above to work with for practice.

### Instructor Explains/Demonstrates

#### Comparison and Logical Operators

Comparison and Logical operators are used to test for true or false.

**Comparison Operators**

<img width="727" alt="Screen Shot 2020-09-10 at 1 51 23 PM" src="https://user-images.githubusercontent.com/54545904/92775899-c6781f00-f36c-11ea-8f7b-fed7f9e8c353.png">

**Logical Operators**

<img width="725" alt="Screen Shot 2020-09-10 at 1 51 03 PM" src="https://user-images.githubusercontent.com/54545904/92775887-c2e49800-f36c-11ea-80c6-dcd4cefbc246.png">

### Instructor Explains/Demonstrates

#### Conditional Statements

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
const juniorDev = 17;
const answer = prompt("What is your age?");

if (answer <= 13) {
  console.log("Come back when youre old enough to code!");
} else if (answer <= 18) {
  console.log("Maybe you can code, you're a junior!");
} else {
  console.log("You’re a senior dev, enjoy!");
}
```

#### Junior Devs Demonstrate

Create a conditional called `club code`
and you can only enter club code if you you are a junior developer with 1 year of experience.

## Next Steps

Now that you are familiar with the basics of JavaScript, head on over to the [Lab](../JS%20Basics/js-basics-drill.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
