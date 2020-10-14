![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Numbers

# Table of Content

- [Javascript Numbers](#javascript-numbers)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Notes](#instructor-notes)
    - [Numbers](#numbers)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-1)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-2)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-3)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-4)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-5)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-6)
    - [Number Methods](#number-methods)
      - [Junior Developer Demonstrates](#junior-developer-demonstrates-7)
  - [Next Steps](#next-steps)

## Objectives

- Define JavaScript numbers.
- Understand number methods.

## About

JavaScript has only one type of number. Numbers can be written with, or without, decimals.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Notes

Here instructors can demonstrate the way to interact with numbers below. Students/Employees can utilize the following examples to gain a foundational understanding of how numbers work in JavaScript.

### Numbers

**Example with regular number:**

```js
let example = 7;

console.log(example);
// Output: 7;
```

#### Junior Developer Demonstrates

Create a variable with a number as its value and print it to the console.

**Example with decimal:**

```js
let exampleTwo = 8.88;

console.log(example2);
// Output: 8.88;
```

#### Junior Developer Demonstrates

Create a variable with a decimal number as its value and print it to the console to see results.

**Example of NAN:**

```js
let x = 100 / "Apple";

console.log(x);
// Output: Not a number or Error
```

**Example of `typeof`:**

```js
let p = 100;
let w = “100”

console.log(typeof p)
// Output: shows number

console.log(typeof w)
//Output: shows string
```

#### Junior Developer Demonstrates

Create two variables with a number and number as a string and show its type by printing it to the console.

**Example of multiplication:**

```js
let y = 10 * 10;

console.log(y);
// Output: 20;
```

#### Junior Developer Demonstrates

Create a variable or two variables and utilize multiplication and print the answer to the console.

**Example of addition:**

```js
let q = 20 + 10;

console.log(q);
// Output: 30;
```

#### Junior Developer Demonstrates

Create a variable or two variables and utilize addition and print the answer to the console.

**Example of division:**

```js
let t = 1120 / 10;

console.log(t);
// Output: 112;
```

#### Junior Developer Demonstrates

Create a variable or two variables and utilize division and print the answer to the console.

**Example of subtraction:**

```js
let b = 30 - 10;

console.log(b);
// Output: 20;
```

#### Junior Developer Demonstrates

Create a variable or two variables and utilize subtraction and print the answer to the console.

### Number Methods

Number methods help you work with numbers. They come in handy when working with strings and numbers.

**Example of `toString()` method returns a number as a string.**

```js
let e = 123;

console.log(e.toString());
```

#### Junior Developer Demonstrates

Create a variable with a number as its value and return the value of the variable as a string and print the answer to the console.

**Example of `valueof` returns a number as a number.**

```js
let e = 123;

console.log(e.valueOf());
```

**Example of `toExponential()` method returns a string, with a number rounded and written using exponential notation.**

```js
let y = 6.423;

console.log(y.toExponential(2));

console.log(y.toExponential(3));

console.log(y.toExponential(4));
```

**Example of `toFixed()` method returns a string, with the number written with a specified number of decimals.**

```js
let w = 7.573;

console.log(w.toFixed(0));

console.log(w.toFixed(2));

console.log(w.toFixed(4));
```

**Example of `Number()` method can be used to convert JavaScript variables to numbers.**

```js
Number(true); // returns 1

Number(false); // returns 0

Number("10"); // returns 10

Number("  10"); // returns 10

Number("10.33"); // returns 10.33

Number("10,33"); // returns NaN

Number("10 33"); // returns NaN

Number("John"); // returns NaN
```

**Example of `parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.**

```js
let decExample = 9.87;

console.log(parseInt(decExample));
```

**Example of `parseFloat()` parses a string and returns a number. Spaces are allowed. Only the first number is returned.**

```js
let decExample2 = "9.87";

console.log(parseFloat(decExample2));
```

## Next Steps

Now that you have a better understanding of numbers in JavaScript, head over to the [Lab](../Numbers/js-numbers-drill.md) to practice on these new skills. Use this lesson as a reference if you find yourself having trouble with the lab.
