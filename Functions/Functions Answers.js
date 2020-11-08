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

// Prompt 9


// Prompt 10



