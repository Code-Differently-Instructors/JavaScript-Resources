![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Navigation Bar

# Table of Content

- [Navigation Bar](#navigation-bar)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [Nav Bar](#nav-bar)
      - [Junior Devs Demonstrates](#junior-devs-demonstrates)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [Margin and Padding](#margin-and-padding)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [Styling Nav with CSS](#styling-nav-with-css)
    - [Next Step](#next-step)

## Objectives

- What is Nav?
- Know how to style a navigation bar.
- Margin and Padding.


## About

In this unit, you will learn what Nav is all about. You will also learn what is nav, how to style a navigation bar, and margin and padding.


## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### Nav Bar

The ```<nav>``` tag defines a set of navigation links.

Notice that NOT all links of a document should be inside a ```<nav> ```element. The ```<nav>``` element is intended only for major block of navigation links.

Here is an example:
```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>
```
The block of code above will displayed as such:
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>
<br>

#### Junior Devs Demonstrates

Create two navigation links.

### Instructor Explains/Demonstrates

#### Margin and Padding


1. The CSS margin properties are used to create space around elements, outside of any defined borders.
With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

2. The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).


### Instructor Explains/Demonstrates

#### Styling Nav with CSS

A navigation bar needs standard HTML as a base.

In our examples we will build the navigation bar from a standard HTML list.

A navigation bar is basically a list of links, so using the ```<ul>``` and ```<li>``` elements makes perfect sense:

Like we discussed before, you can use either Inline or External CSS to style your HTML files.

Here is an example of Inline Styling:
```html
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
```

Here is an example of External Styling:
```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

It is also possible to make your navigation bar vertical and/or horizontal.

Here is an example of how to make a vertical navigation bar:
```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #555;
  color: white;
}
```

Here is an example of a horizontal navigation bar: 
```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
```

### Next Step