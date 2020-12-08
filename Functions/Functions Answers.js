// // Prompt 1
// function greeting() {
//   alert("Hey there");
// }
// // Calling function
// greeting();


// Prompt 2 https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}

console.log(reversedNum(-543.21))

console.log(reversedNum(23000000))

console.log(reversedNum(543.21))

// Prompt 3 
// freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
function palindrome(str) {
  var re = /[\W_]/g
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
console.log(palindrome("eye"));


// Prompt 4
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Prompt 5
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toLowerCase() + word.slice(1))
    .join(' ');
};

let result = toTitleCase('maRy hAd a lIttLe LaMb');
console.log(result);

// Prompt 6
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

let result = toTitleCase('maRy hAd a lIttLe LaMb');
console.log(result);

// Prompt 7
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
//returns number, word with most characters
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// OR

function longer(champ, contender) {
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  var words = str.split(' ');
  return words.reduce(longer);
}
// returns actual word
console.log(longestWord("The quick brown fox jumped over the lazy dogs"));

// Prompt 8
 function multiplynums (num1,num2){
  let thenumber1 = Number(num1);
  let thenumber2 = Number(num2);
  let theanswer =  thenumber1 * thenumber2;
  
  console.log(theanswer)
 }

 multiplynums(5,5)



 // // Prompt 1
function greeting(x){
    console.log(x)
}
greeting("Hey there")

// // Prompt 2
function reverse(x)
{
	x = x + "";
	return x.split("").reverse().join("");
}
console.log(reverse(32243));

// // Prompt 3
function palindrome(str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");

// //   Prompt 4
function alphaOrder(Order)
  {
return Order.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// // Prompt 5
function changeToLowerCase(x){
 console.log(x.toLowerCase());
}

changeToLowerCase("SaLly SeLls SeA ShelLs")

// // Prompt 6
function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("sally sells sea shells"));

// // Prompt 7
function find-longest-word(str)
{
  let array = str.match(/\w[a-z]{0,}/gi);
  let result = array[0];

  for(let x = 1 ; x < array.length ; x++)
  {
    if(result.length < array[x].length)
    {
    result = array[x];
    } 
  }
  return result;
}
console.log(find_longest_word("Welcome to the developmental shop provided by Code Differently"));

// // Prompt 8
function multiply(a, b){
  console.log( a * b)
}

multiply(4, 8)

// Prompt 9
let myColor = ["Red, Green, Yellow, Blue"]

for (let i = 0; i < myColor.length; i++) {
    console.log(`${myColor[i]}`)
};

// Prompt 10
function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  console.log(...howManyRepeated(str));

//   Bonus
function calculateDogAge(age) {
    const dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(3);
calculateDogAge(7);
calculateDogAge(12);
  



