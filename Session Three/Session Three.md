![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# HTML Basics

# Table of Content

- [HTML Basics](#html-basics)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [Lists](#lists)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [Forms](#forms)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-1)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [Adding CSS to Lists](#adding-css-to-lists)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-2)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [Adding CSS to Forms](#adding-css-to-forms)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-3)
    - [Next Step](#next-step)

## Objectives

- Know how to add CSS to lists.
- Know how to add CSS to forms.
- Lists
- Forms

## About

In this unit, you will learn what CSS is all about. You will also learn how to create a file,  tag attributes, Inline and External CSS, changing the color, font, and background color, and adding images.


## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### Lists


HTML lists allow web developers to group a set of related items in lists.

1. Unordered lists ```(<ul>)``` - The list items are marked with bullets.
2. Ordered lists ```(<ol>)``` - The list items are marked with numbers or letters.
3. Lists ```(<li>)``` - The list items will be marked with bullets (small black circles) by default.
```html
<OL>
<LI> This is step one. </LI>  
<LI> This is step two. </LI>
<LI> This is step three. </LI>
</OL>
```

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

The HTML ```<form>``` element is used to create an HTML form for user input:

```html
<form>
.
form elements
.
</form>
```

An ```<input>``` element can be displayed in many ways, depending on the **type** attribute.

Here are some examples:
```html
<input type="text"> represents: 
```
Displays a single-line text input field

```html
<input type="radio">
```
Displays a radio button (for selecting one of many choices)

```html
<input type="checkbox">	
```
Displays a checkbox (for selecting zero or more of many choices)

```html
<input type="submit">	
```
Displays a submit button (for submitting the form)

```html
<input type="button">	
```
Displays a clickable button

It is always good to label and give your form an id. To do this, you simply have a ```<label for>``` element and an ```<id>``` element. This is how it would look:
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  </form>
  ```


#### Junior Devs Demonstrate

Create a form that can allow users to input their first and last names in. Also, create a checkbox for your top 3 favorite snacks.

### Instructor Explains/Demonstrates

#### Adding CSS to Lists

The CSS list properties allow you to:

- Set different list item markers for ordered lists
- Set different list item markers for unordered lists
- Set an image as the list item marker
- Add background colors to lists and list items

The ```list-style-type``` property specifies the type of list item marker.
The following example shows some of the available list item markers:
```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```

```html
<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```
In the code above, the unordered list will be open circles bulleted.



#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### Adding CSS to Forms


You can use the ```width``` property to determine the width of the input field:

```css
input {
  width: 100%;
}
```
The example above applies to all ```<input>``` elements. If you only want to style a specific input type, you can use attribute selectors:

```css
input[type=text]
```
Will only select text fields.
```css
input[type=password]
``` 
Will only select password fields.
```css
input[type=number]
```
Will only select number fields.

#### Junior Devs Demonstrate

### Next Step
