![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Fetch

# Table of Content

- [Javascript Fetch](#javascript-fetch)
- [Table of Content](#table-of-content)
  - [JavaScript Fetch Lab](#javascript-fetch-lab)
    - [Prerequisites](#prerequisites)
    - [About](#about)
    - [The Set Up](#the-set-up)
    - [The Task](#the-task)
      - [Example](#example)
  - [Additional Resources](#additional-resources)
  - [Submission](#submission)

## JavaScript Fetch Lab

### Prerequisites

- JavaScript Fundamentals

### About

Since the start of the program you have learned how to build your own websites, utilizing HTML and CSS. But you have yet to generate content on these sites outside of what you created from scratch. In this lab you will be utilizing Fetch to request information from third-party databases or APIs, generating content on your webpage from third party servers.

### The Set Up

- You will need to create a new repository.
- Run live server in the folder to see your work.

### The Task

You are to make a basic webpage and will generate information from a third party database/API. Your webpage must include a search and submit form with an ordered/unordered list to show results. For this particular lab you will have the opportunity to utilize any API of your choosing, choosing from this [list](https://github.com/public-apis/public-apis). Be sure to look over the API **DOCS** or documentation, which is given to provide instructions on how to utilize the site's API.

#### Example

Please see below on the implementation of fetch. You can see that the [Pokemon API](https://pokeapi.co/) is being used in this example, generating the API's data.

**Example of using fetch**

```js
const url = "https://pokeapi.co/api/v2/pokemon/";

// fetch takes a url, and an object with a few optional parameters.
// Ex: {method: 'POST', headers: {'Content-Type': 'application/json'}}
// The default method of fetch is a GET request
// For now all we have to pass fetch is the url
fetch(url)
  .then((res) => {
    console.log("success!", res);
  })
  .catch((err) => {
    console.log("something went wrong...", err);
  });
```

**Results**
<img width="1410" alt="Screen Shot 2020-09-25 at 12 21 10 AM" src="https://user-images.githubusercontent.com/54545904/94233659-3abad280-fed6-11ea-82e6-6e0c2d6a7f57.png">

## Additional Resources

List of free APIs [here](https://github.com/public-apis/public-apis).

## Submission

You will need to submit an issue on this repository.
