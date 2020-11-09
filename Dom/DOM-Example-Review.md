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


## Instructor Explains/Demonstrates

With the DOM, developers have the ability to select elements, reach or change elements, and respond to user events. 

#### Junior Developer Demonstrates

Name object and properties used to select elements in an HTML document.


## Instructor Explains/Demonstrates 

The `document` keyword represents the object and the keyword/words after the period define a property that belongs to the object. Some of the object's property can be a method or function.

```js
document.getElementByID();
document.getElementByClass();
document.innerHTML ;
```

#### Junior Developer Demonstrates

Select the element with an `id` of `title`.


## Instructor Explains/Demonstrates 
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

---

## Instructor Explains/Demonstrates

When selecting an element to perform an action, store that element in a variable. Then code to alter the element.

#### Junior Developer Demonstrates

Select the  element with the `id` of `title` and change the color from black to orange.

## Instructor Explains/Demonstrates
#### Example changing element black to orange using getElementById():

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

---

## Instructor Explains/Demonstrates

Going even further, we can add an `event listener` to perform an action when a user clicks a button.

#### Junior Developer Demonstrates

Create a button and add an event listener to change the background of the webpage from white to purple

## Instructor Explains/Demonstrates
#### Example Changing background with event listener on a button:

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

---

## Instructor Explains/Demonstrates

The `document` object also has properties that allow a developer to select a collection of elements and perform tasks on them. Using the method `getElementsByTagName()`, we can select all of the elements in HTML with a specific tag name. 

#### Junior Developer Demonstrates

Select all of the `li` elements at and change the color of the text.

## Instructor Explains/Demonstrates
#### Example of getElementsByTagName():

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
---

## Instructor Explains/Demonstrates

A more flexible way to select HTML elements are to use the `querySelector()` and `querySelectorAll()`.
These methods accept `ids`, `classes`, tag names, and more. 

#### Junior Developer Demonstrates

Using `querySelector`, select an element with an `id` name.

## Instructor Explains/Demonstrates
#### Example of using querySelector()

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
      
    </script>
  </body>
</html>
```

---

## Instructor Explains/Demonstrates

Let's go even further with the DOM. We have the power to no only change the style of elements but we can change the text using the DOM. Using the properties, `textContent` and `innerHTML`, we can such as that.  


#### Junior Developer Demonstrates

Return the text content of an element/node and replace with different text using either `textContent` or `innerHTML`.

## Instructor Explains/Demonstrates
### Example of using innerHTML and textContent

```html
<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <ul>
      <li>red delicious apples</li>
      <li>strawberries</li>
      <li>raspberries</li>
      <li>pomegranate</li>
    </ul>

    <button id="change">Click Me!</button>

    <script>
      const myTitle = document.querySelector('#title');
      const myButton = document.querySelector('#change');
  
      myButton.addEventListener('click', () => {
        myTitle.style.color = 'orange';
        myTitle.textContent = "And I changed it!";
      });
    </script>
  </body>
</html>
```
---

## Instructor Explains/Demonstrates

The DOM also allows developers to change an element's `attribute`. This can be useful in cases where a form's `action` value needs to change or be directed differently due to the user's input.

#### Junior Developer Demonstrates

Change the `input` attribute's value from `radio` to `checkbox`.

## Instructor Explains/Demonstrates
### Example: Changing input type from radio to checkbox


```html
<html>
  <head>
    <title> Document </title>
  </head>

  <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <form>
      <input type="radio" id="red-apple" name="red fruits" value="red delicious">
      <label for="red-apple">Red Delicious Apples</label><br>
      <input type="radio" id="strawberry" name="red fruits" value="strawberry">
      <label for="strawberry">Strawberries</label><br>
      <input type="radio" id="pomegranate" name="red fruits" value="pomegranate">
      <label for="pomegranate">Pomegranate</label>
    </form>
    <br>
    <button id="change">Click Me!</button>

    <script>
      const myTitle = document.querySelector('#title');
      const myButton = document.querySelector('#change');
      const myInputs = document.querySelectorAll('input');
      const myLabels = document.querySelectorAll('label');
     
      myButton.addEventListener('click', () => {
        myTitle.style.color = 'green';
        myTitle.innerHTML = "And I changed it!";
        
        for(let i = 0; i < myInputs.length; i++){
          myInputs[i].type = 'checkbox';
        }

        for (let j = 0; j < myLabels.length; j++){
          myLabels[j].style.color = 'red';
        }   
      });
    </script>
  </body>
</html>
```

---

## Instructor Explains/Demonstrates

The DOM also allows developers to create an element and give it a value using the `createElement()` and `appendChild()` methods. 

#### Junior Developer Demonstrates

Using `createElement()` and `appendChild()` methods, add a button to the HTML doc using the DOM with the text "Click Me!"


## Instructor Explains/Demonstrates
### Example: `createElement()` and `appendChild()`


```html
<html>
  <head>
    <title> Document </title>
  </head>

   <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <ul>
      <li>red delicious apples</li>
      <li>strawberries</li>
      <li>raspberries</li>
      <li>pomegranate</li>
    </ul>

    <script>
      const myButton = document.createElement('button');
      document.body.appendChild(myButton).textContent = "Click Me!";
    </script>
  </body>
</html>
```

---


#### Junior Developer Demonstrates

Using `createElement()` and `appendChild()` methods, create an input to add items to the list of fruits.


## Instructor Explains/Demonstrates
### Example: `createElement()` and `appendChild()`


```html
<html>
  <head>
    <title> Document </title>
  </head>

   <body>
    <h1 id="title"> My Heading! </h1>
    <p> A list of red fruits </p>
    <ul>
      <li>red delicious apples</li>
      <li>strawberries</li>
      <li>raspberries</li>
      <li>pomegranate</li>
    </ul>

    <script>
      const myButton = document.createElement('button');
      document.body.appendChild(myButton).textContent = "Click Me!";
      const myList = document.querySelector('ul');
      const myInput = document.createElement('input');

      myInput.type = 'text';
      document.body.appendChild(myInput);

      myButton.addEventListener('click', () => {
        let listItem = document.createElement('li');
        listItem.textContent = myInput.value;
        myList.appendChild(listItem);
        myInput.value = '';
      });
    </script>
  </body>
</html>
```

Instructor: `Test the input by not adding any text and submit. This will add an empty string to the list. Ask the students/employees to add a conditional statement preventing empty inputs from being submitted`
---

