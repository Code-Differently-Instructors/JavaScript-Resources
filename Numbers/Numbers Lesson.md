![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Numbers

# Table of Content

- [Javascript Numbers](#javascript-numbers)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
    - [Instructor Notes](#instructor-notes)
    - [Numbers](#numbers)
    - [Number Methods](#number-methods)
  - [Next Steps](#next-steps)

## Objectives

- Define JavaScript numbers.
- Understand number methods.

## About

JavaScript has only one type of number. Numbers can be written with, or without, decimals.

### Instructor Notes

Here instructors can demonstrate the way to interact with numbers below. Students/Employees can utilize the following examples to gain a foundational understanding of how numbers work in JavaScript.

### Numbers

**Example with regular number:**

```js
let example = 7;

console.log(example);
// Output: 7;
```

**Example with decimal:**

```js
let exampleTwo = 8.88;

console.log(example2);
// Output: 8.88;
```

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

**Example of multiplication:**

```js
let y = 10 * 10;

console.log(y);
// Output: 20;
```

**Example of addition:**

```js
let q = 20 + 10;

console.log(q);
// Output: 30;
```

**Example of division:**

```js
let t = 1120 / 10;

console.log(t);
// Output: 112;
```

**Example of subtraction:**

```js
let b = 30 - 10;

console.log(b);
// Output: 20;
```

### Number Methods

Number methods help you work with numbers. They come in handy when working with strings and numbers.

**Example of `toString()` method returns a number as a string.**

```js
let e = 123;

console.log(e.toString());
```

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
