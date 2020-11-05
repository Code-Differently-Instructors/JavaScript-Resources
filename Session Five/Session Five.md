![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# HTML Basics

# Table of Content

- [HTML Basics](#html-basics)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
  - [How to use](#how-to-use)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates)
      - [How to add Audio to your webpage.](#how-to-add-audio-to-your-webpage)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-1)
      - [How to add Video to your webpage.](#how-to-add-video-to-your-webpage)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-1)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-2)
      - [Embed a video.](#embed-a-video)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-2)
    - [Instructor Explains/Demonstrates](#instructor-explainsdemonstrates-3)
      - [Flex Box](#flex-box)
      - [Junior Devs Demonstrate](#junior-devs-demonstrate-3)
    - [Next Steps](#next-steps)

## Objectives

- Know how to add audio to your webpage.
- Know how to add video to your webpage.
- Embedding a video.
- Flex Box.

## About

In this unit, you will learn what about audio and video on a webpage, as well embedding a video. You will also learn what is flex box is and how to utilize on your webpage.

## How to use

This will serve as the demonstration instructors will give in regards to what students/employees have learned whether in Treehouse or otherwise. The "Instructor Explains/Demonstrates" section is for the instructor to explain the following topic and there are pre-made examples to use for demonstration purposes. The "Junior Devs Demonstrate" is for the students/employees to demonstrate what they just learned.

### Instructor Explains/Demonstrates

#### How to add Audio to your webpage.

You can add audio to your page. If you have an mp3 file  download on your PC/device, you can add it your webpage.

```html
<audio>
<source src=”mario.mp3” type=”audio/mpeg”>
</audio>
```

#### Junior Devs Demonstrate

Add an audio file to your page of your favorite song. No explicit songs allowed!

### Instructor Explains/Demonstrates 

#### How to add Video to your webpage.

You can add video to your page. If you have an  mp4 file download on your PC/device, you can add it your webpage.
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```

#### Junior Devs Demonstrate

Add a video file to your page of your favorite song. No explicit videos or anything inappropriate allowed!

### Instructor Explains/Demonstrates 

#### Embed a video.

Converting videos to different formats can be difficult and time-consuming.

An easier solution is to let YouTube play the videos in your web page.

YouTube will display an id (like tgbNymZ7vqY), when you save (or play) a video.

You can use this id, and refer to your video in the HTML code.
To play your video on a web page, do the following:

1. Upload the video to YouTube
2. Take a note of the video id
3. Define an ``<iframe>`` element in your web page
4. Let the src attribute point to the video URL
5. Use the ``width`` and ``height`` attributes to specify the dimension of the player
6. Add any other parameters to the URL (see below)

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

#### Junior Devs Demonstrate

Find your favorite video on youtube and try to ad it to your page by embedding it. No inappropriate videos allowed!

### Instructor Explains/Demonstrates 

#### Flex Box

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

A flex container with three flex items:
```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.flex-container {
  display: flex;
}
```
The flex container becomes flexible by setting the display property to flex:

The flex container properties are:

- ``flex-direction`` defines in which direction the container wants to stack the flex items.
- ``flex-wrap`` property specifies whether the flex items should wrap or not.
- ``flex-flow`` property is a shorthand property for setting both the ``flex-direction`` and ``flex-wrap`` properties.
- ``justify-content`` property is used to align the flex items.
- ``align-items`` property is used to align the flex items.
- ``align-content`` property is used to align the flex lines.


#### Junior Devs Demonstrate 

Create a flexbox to your page and try to add the embedded video to the flexbox.

### Next Steps




 

