# Javascript DOM

# Table of Content

- [Javascript DOM](#javascript-dom)
- [Table of Content](#table-of-content)
  - [About](#about)
  - [Prerequisites](#prerequisites)
  - [Instructions](#instructions)
    - [Task/Requirements](#taskrequirements)
        - [First Objective: Landing page](#first-objective-landing-page)
        - [Second Objective: Main Content Page](#second-objective-main-content-page)
        - [CSS Objectives](#css-objectives)
        - [Dom Utilization](#dom-utilization)
  - [Submission](#submission)

## Objectives

- What is the DOM
- Making Changes to the DOM
- Responding to User Interaction
- Traveling Through the DOM (Traversal)

## About

JavaScript allows you to create interactive web pages that can respond to a user's actions.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

## Instructor Notes

Here instructors can demonstrate the way to interact with the DOM below. Students/Employees can utilize the following examples to gain a foundational understanding of how the DOM works in JavaScript.

## Instructor Explains/Demonstrates
### What is the DOM??

The DOM stands for `Document Object Model`. It is a representation or map of the webpage that JavaScript can manipulate. We can use the variables of the browser's global scope environment. The global object used by the browser is the <code>window</code>. You will be using the properties of the global object, `document`.

The DOM represents a webpage as a tree-like structure.

  - The document element aka `node` represents the root node of the tree.
  - `<body>` and `<head>` nodes sprout like branches, leading to others. 
  - Other elements, such as `<p>`, `<ul>`, etc., can be described as the leaves.

The relationship between nodes is similar to a family structure.
  - The `<body>` node would be described as the `parent` and the `<h1>` node would represent its child. 


#### Junior Developer Demonstrates

Name some of the basic tasks JS can do with the DOM?

## Instructor Explains/Demonstrates
Treehouse names:
- Select an element
- Read or change element
- Respond to user events

---

#### Junior Developer Demonstrates

The object and properties used to select elements in an HTML document.



## Instructor Explains/Demonstrates 

The `document` keyword represents the object and the keyword/words after the period define a property that belongs to the object. Some of the object's property can be a method or function.

```js
document.getElementByID();
document.getElementByClass();
document.innerHTML();
```

#### Example of selecting an element:

```html
<!doctype html>
<html>
<head>
  <title> Document </title>
</head>
<body>
  <h1 id="title"> My Heading! </h1>
  <script>

</body>
</html>
```

```js
document.getElementByID('title');
```

#### Junior Developer Demonstrates

Select the `h1` element and change the color from black to orange.

## Instructor Explains/Demonstrates
#### Example changing element black to orange

```html
<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <script>
      document.getElementByID('title').style.color = 'orange';
    </script>
  </body>
</html>
```


#### Junior Developer Demonstrates
Create a button and add an event listener to change the background of the webpage from white to purple

## Instructor Explains/Demonstrates
#### Changing background with event listener on a button:

```html
<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <button id="change">Click Me!</button>

    <script>
      const myHeading = document.getElementById('title');
      const myButton = document.getElementById('change');

      myHeading.style.color = 'orange';
      myButton.addEventListener('click', () => {
        document.body.style.backgroundColor = 'purple';
      })


    </script>
  </body>
</html>
```




#### Junior Developer Demonstrates

Select a collection of elements at once and change the color of the font.

## Instructor Explains/Demonstrates
#### Example of division: Using getElementsByTagName()

```html

<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <ul>
      <li> red delicious apples</li>
      <li> strawberries</li>
      <li>raspberries</li>
      <li>pomegranate</li>
    </ul>

    <button id="change">Click Me!</button>

    <script>
      const myHeading = document.getElementById('title');
      const myButton = document.getElementById('change');
      const myList = document.getElementsByTagName('li');

      
      myButton.addEventListener('click', () => {
        myTitle.style.color = 'orange';

        for(let i = 0; i < myList.length; i++){
          myList[i].style.color = 'red';
        }

      })


    </script>
  </body>
</html>
```

#### Junior Developer Demonstrates

Using `querySelector`, select the element with a class name.

## Instructor Explains/Demonstrates
#### Example of subtraction:

```html
<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <ul>
      <li> red delicious apples</li>
      <li> strawberries</li>
      <li>raspberries</li>
      <li>pomegranate</li>
    </ul>

    <button id="change">Click Me!</button>

    <script>
      const myTitle = document.querySelector('#title');
      const myButton = document.querySelector('#change');
      const myList = document.querySelectorAll('li');

      
      myButton.addEventListener('click', () => {
        myTitle.style.color = 'orange';

        for(let i = 0; i < myList.length; i++){
          myList[i].style.color = 'red';
        }
      })
    </script>
  </body>
</html>
```

<!-- End edits here -->

#### Junior Developer Demonstrates

Create a variable or two variables and utilize subtraction and print the answer to the console.

## Instructor Explains/Demonstrates
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