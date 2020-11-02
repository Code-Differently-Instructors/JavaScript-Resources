![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Object Oriented Javascript

# Table of Content

- [Object Oriented Javascript](#object-oriented-javascript)
- [Table of Content](#table-of-content)
  - [Object Oriented JavaScript Lab](#object-oriented-javascript-lab)
    - [Prerequisites](#prerequisites)
    - [The Set Up](#the-set-up)
    - [The Task](#the-task)
  - [Object Literals Prompts](#object-literals-prompts)
  - [Classes Prompts](#classes-prompts)
  - [Bonus!!!](#bonus)
    - [Getters & Setter Prompts](#getters--setter-prompts)
  - [Submission](#submission)

## Object Oriented JavaScript Lab

### Prerequisites

- JavaScript Fundamentals

### The Set Up

- You will need to fork and clone this repository.
- Change into the new directory.
- Create new file called `Prompts.JS`
- Copy and paste prompts into new file.
- Make sure to number the prompts you are answering in order to identify what is being answered.
- Complete the prompts below.

**Make one commit after each prompt you complete.**

**Make sure to cancel out previous prompt in order to run each prompt's code successfully.**

### The Task

Take the following object:

```js
const whiskers = {
  animal: "cat",
  age: "3",
  breed: "bengal",
  color: "golden",
  tail: "short",
  gender: "male",
  sound: function () {
    console.log("Meow");
  },
  play: function () {
    console.log("Oohh Yarn Toy!");
  },
};
```

## Object Literals Prompts

**Prompt 1:** Access the `animal` property of the object above and print its value to the console using dot notation.

**Prompt 2:** Access the `age` property of the object above and print its value to the console using dot notation.

**Prompt 3:** Call the `sound` method property from object above and print to the console using dot notation.

**Prompt 4:** Access the `breed` property of the object above and print its value to the console using bracket notation.

**Prompt 5:** Access the `color` property of the object above and print its value to the console using bracket notation.

**Prompt 6:** Call the `play` method property from object above and print to the console using bracket notation.

**Prompt 7:** Create a variable and store one of the properties from the object in the variable and print its value to the console using bracket notation.

**Prompt 8:** Change the value of the `color` property to `white` using dot notation.

**Prompt 9:** Change the value of the `gender` property to `female` using bracket notation.

**Prompt 10:** Add a property called `size` with a value of `small` using dot notation.

**Prompt 11:** Add a property called `diet` with a value of `kitty mix` using bracket notation.

## Classes Prompts

**Prompt 1:** Create a class called `Smartphone` and add an empty constructor method to the `Smartphone` class.

**Prompt 2:** Add the following parameters to the constructor method and set it equal to the parameters. `OS`, `model`, `app market`, `company`.

**Prompt 3:** Create 1 new instance named `phone1` for the `Smartphone` class.

**Prompt 4:** Create another new instance named `phone2` for the `Smartphone` class, make it a different device from `phone1`.

**Prompt 5:** Print the `OS` property of `phone1` to the console using dot notation.

**Prompt 6:** Print the `model` property of `phone2` to the console using bracket notation.

**Prompt 7:** Add a method called `Call` to the `Smartphone` class. This means you will also have to add another parameter called `ringtone` to the constructor to hold the value/sound the `call` method would make.

**Prompt 8:** Use dot notation to call the `call` method for `phone1` and print it to the console.

**Prompt 9:** Use bracket notation to call the `call` method for `phone2` and print it to the console.

**Prompt 10:** Add a method to the `Smartphone` class called `changeRingtone`. This method should receive one parameter, representing the new ringtone. It shouldn’t return anything. The object of the method is to change the value of the `ringtone` property.

**Prompt 11:** Call the `changeRingtone` method and change the `ringtone` to “Beyonce” for `phone1` using dot notation.

**Prompt 11:** Call the `changeRingtone` method and change the `ringtone` to “Drake” for `phone2` using bracket notation.

**Make sure to keep and save work as you will continue working with the same class for next section**

## Bonus!!!

### Getters & Setter Prompts

**Prompt 12:** Create a `getter` method called `businessCalls` that retrieves todays date and time.

**Prompt 12:** Write a conditional in `getter` method that if the time is greater than 10 and less than 21 then return `"phone has been ringing all day!"`. If not, then it will return `"phone on nighttime mode"`.

**Prompt 12:** Print the value of the `businessCalls` to the console using dot and bracket notation (on separate lines).

**Prompt 13:** Create a `setter` method called `phoneOwner` with a parameter of `phoneOwner`.

**Prompt 14:** Add a console log inside the setter method to make sure it has been called.

**Prompt 15:** Create a getter method called `phoneOwner`.

**Prompt 16:** Add an owner of `phone1` named `John` using bracket notation and print owner to the console.

**Prompt 17:** Add an owner of `phone2` named `Jane` using dot notation and print owner to the console.

## Submission

You will need to submit an issue on this repo.
