![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Loops

# Table of Content

- [Javascript Loops](#javascript-loops)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
  - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [`For` Loops](#for-loops)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
  - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [`for..in` Loop](#forin-loop)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-1)
  - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [`For..Of` Loop](#forof-loop)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-2)
  - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [`while` Loops](#while-loops)
      - [Another Example](#another-example)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-3)
  - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-4)
      - [`do...while` Loops](#dowhile-loops)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-4)
  - [Next Steps](#next-steps)

## Objectives

- Understand types of loops.
- Iteration using loops.
- Using `while` and `for` loops.

## About

In this unit you learned about loops and how they offer a quick and easy way to do something repeatedly. You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

## Instructor Explains/Demonstrates

#### `For` Loops

A `for` loop repeats until a specified condition evaluates to false.

**Syntax**

```js
for (argument 1; argument 2; argument 3) {
  // code block to be executed
}
```

`Argument 1` is executed (one time) before the execution of the code block.

`Argument 2` defines the condition for executing the code block.

`Argument 3` is executed (every time) after the code block has been executed.

How would this look when we write it out?

**Example**

```js
for (let i = 0; i < 50; i++) {
  console.log(i);
}
```

Let us understand what is going on in the example above. To start, the `for` keyword start the loop. Next is the parentheses that will contain the block of code `(let i = 0; i < 50; i++)`, and lastly the block of code you want to repeatedly run (inside the {} braces).

**Understanding the three parts of this `for` loop:**

- `let i = 0` establishes a variable that we will use to iterate (increase or decrease by some number) with each iteration of the loop. This is not always the case, JavaScript doesn't care. Argument 1 is optional.

- `i < 50` here we have a comparison expression. It states the variable `i` is less than `50`. The loop will continue to execute until this expression evaluates to false. Often, Argument 2 is used to evaluate the condition of the initial variable. Argument 2 is also optional. If argument 2 returns true, the loop will start over again, if it returns false, the loop will end.

- `i++` controls how the iteratee should change after each iteration. In this case, `++` increases the variable's value by 1.

#### Junior Devs Demonstrate

Create a simple `for` loop.

## Instructor Explains/Demonstrates

#### `for..in` Loop

The `for...in` loops through properties and values of an object.

```js
let developer = {
  firstName: "John",
  lastName: "Doe",
  company: "123code",
};

for (i in person) {
  console.log(i + ":" + person[i]);
}
```

#### Junior Devs Demonstrate

Create an object and write a simple `for...in` loop to iterate over the object and print its properties and value to the console.

## Instructor Explains/Demonstrates

#### `For..Of` Loop

The `for...of` loop lets you loop over data structures that are iterable such as Arrays, Strings, Maps etc. Whereas the `for...in` loop iterates over property names, the `for...of` loop iterates over property values.

```js
let scores = [80, 90, 70];

for (let score of scores) {
  console.log(score);
}
```

#### Junior Devs Demonstrate

Create an array and write a simple `for...of` loop to iterate over the array and print its values to the console.

## Instructor Explains/Demonstrates

#### `while` Loops

The `while`loop loops through a block of code as long as a specified condition is true.

**Syntax**

```js
while (condition) {
  // code block to be executed
}
```

If the `condition` becomes false, the statement within the loop stops executing and control passes to the statement following the loop.

The `condition` test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the `condition` returns false, execution stops, and control is passed to the statement following while.

**Example**

```js
let w = 0;
let t = 1;
while (w < 3) {
  w++;
  t += w;
}

console.log(w, t);
```

With each iteration, the loop increments `w` and adds that value to `t`. Therefore, `w` and `t` take on the following values:

- First iteration: `w = 1 and t = 2`
- Second iteration: `w = 2 and t = 4`
- Third iteration: `w = 3 and t = 7`

After completing the third pass, the condition `W < 3` is no longer true, so the loop terminates.

#### Another Example

```js
let count = 1;
while (count < 11) {
  console.log(count);
  count += 1;
}
```

#### Junior Devs Demonstrate

Create `while` loop and print its value to the console.

## Instructor Explains/Demonstrates

#### `do...while` Loops

The `do...while` statement repeats until a specified condition evaluates to false.
This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
**Example**

```js
let count = 0;
do {
  count++;
  console.log("count is:" + count);
} while (count < 10);
```

#### Junior Devs Demonstrate

Create `do...while` loop and print its value to the console.

## Next Steps

Now that you are familiar with the loops of JavaScript, head on over to the [Lab](../Loops/Loops%20Lab.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
