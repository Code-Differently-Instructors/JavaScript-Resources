![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# HTML Basics

# Table of Content

- [HTML Basics](#html-basics)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [What is CSS?](#what-is-css)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [How to create a CSS file.](#how-to-create-a-css-file)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [How to add CSS to HTML.](#how-to-add-css-to-html)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-1)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [Tag Attributes](#tag-attributes)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-4)
      - [Inline CSS](#inline-css)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-2)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-5)
      - [External CSS](#external-css)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-3)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-6)
      - [Changing the font, color, and background color.](#changing-the-font-color-and-background-color)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-4)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-7)
      - [The href Attribute](#the-href-attribute)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-5)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-8)
      - [The src Attribute](#the-src-attribute)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-6)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-9)
      - [Adding Images and Styling with CSS](#adding-images-and-styling-with-css)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-7)
    - [Next Steps](#next-steps)

## Objectives

- Define what is CSS.
- How to create a CSS file.
- Know how to add CSS to HTML.
- Know how to resize an image in CSS and HTML.
- Changing fonts, color, and background color.
- How to add Images and Styling with CSS.
- Tag Attributes.
- External and Internal CSS.
- The href Attribute.
- The src Attribute.

## About

In this unit, you will learn what CSS is all about. You will also learn how to create a file,  tag attributes, Inline and External CSS, changing the color, font, and background color, and adding images.


## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### What is CSS?

CSS stands for Cascading Style Sheets with an emphasis placed on “Style.” While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), CSS comes through and specifies your document’s style—page layouts, colors, and fonts are all determined with CSS. 

### Instructor Explains/Demonstrates

#### How to create a CSS file.

To create a CSS File, you just have to end the file name with ```.css```, similar to creating an html file.

#### Junior Devs Demonstrate

Create a CSS file by ending the file name as ```.css```.

### Instructor Explains/Demonstrates

#### How to add CSS to HTML.
- There are two ways to add CSS to HTML:

1. Inline - by using the style attribute inside HTML elements
2. External - by using a ```<link>``` element to link to an external CSS file

The most common way to add CSS, is to keep the styles in external CSS files. However, in this tutorial we will use inline and internal styles, because this is easier to demonstrate, and easier for you to try it yourself.

#### Junior Devs Demonstrate


### Instructor Explains/Demonstrates 

#### Tag Attributes

1.	All tags can have attributes. 
2.	Tags provide information about an element. 
3.	Its placed within the start tag. 
4.	Key/value pairs (id="someID")

### Instructor Explains/Demonstrates

#### Inline CSS

```html
<h1 style="color:blue;">A Blue Heading</h1>
```

You can still use a header tag, but with this, you can add the style element to style this header and specify what color you want it to be.

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates 

#### External CSS

An external style sheet is used to define the style for many HTML pages.

To use an external style sheet, add a link to it in the ```<head>``` section of each HTML page:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
This is the basic format of the HTML. The link is refering to the style.css file, which will contain the styling of the webpage.

```css
body {
  
}

h1 {
  
}

p {
  
}
```

Inside the body, h1, and p elements, you have the power to change things such as color, background color, font, etc.

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### Changing the font, color, and background color.

The ```background-color``` property specifies the background color of an element.

The ```color``` property specifies the color of an element.

The ```font-family``` property specifies the font of an element.

```css
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  font-family: verdana;
}
```

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### The href Attribute

The ```<a>``` tag defines a hyperlink. The **href** attribute specifies the URL of the page the link goes to:
```html
<a href="https://www.google.com">Visit Google</a>
```

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### The src Attribute

The ```<img>``` tag is used to embed an image in an HTML page. The **src** attribute specifies the path to the image to be displayed. If you have an image saved on your device, then the src attribute would be the best tag to use.

```html
<img src="images.png>
```

#### Junior Devs Demonstrate

### Instructor Explains/Demonstrates

#### Adding Images and Styling with CSS

If you do not have an image saved on your PC, you can always find one online and use that for your website. In order to do that, you must have the full URL of the image you want to use. 

To use an image on your page, you must use ```<img src>``` to link the image to your page. In this case, lets try it out:
```<img src="">```

In the quotations, put the full URL of your image.

Alternatively, you can use the width and height attributes in the ```<img src>``` to change the width and height of the image.

```html
<img src="images.png" width="500" height="600">
```


#### Junior Devs Demonstrate

Find an image online and use the ```<img src>``` tag to display the image on your page.


### Next Steps
For the last 15 minutes, try adding an image using external CSS and change the font, color, and background color. While you're at it, add two of your favorite images and resize them to make one bigger, and one smaller.





 

