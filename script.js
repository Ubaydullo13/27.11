// 27

function getDistinctElements(numbers) {
    let distinctArray = [];

    numbers.forEach(function (number) {
        if (!distinctArray.includes(number)) {
            distinctArray.push(number);
        }
    });

    return distinctArray;
}

let inputArray = [1, 2, 3, 4, 2, 3, 5];
let result = getDistinctElements(inputArray);
console.log(result); 

// 28

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function firstNPrimes(n) {
    const primes = [];
    let count = 0;
    let currentNumber = 2;

    while (count < n) {
        if (isPrime(currentNumber)) {
            primes.push(currentNumber);
            count++;
        }
        currentNumber++;
    }

    return primes;
}

const resultArray = firstNPrimes(100);
console.log(resultArray);

// 30

function addStrings(num1, num2) {
    let natija = "";
    let carry = 0;

    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        natija = (sum % 10) + natija;
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return natija;
}

const num1 = "1234567890";
const num2 = "9876543210";

const natija = addStrings(num1, num2);
console.log(natija);

// 31
function countWords(text) {
    const wordsArray = text.split(/\b\W+\b/);

    const wordCount = wordsArray.reduce((count, word) => count + (word.length > 0 ? 1 : 0), 0);

    return wordCount;
}

const text = "This is a sample text with some words.";
const numberOfWords = countWords(text);
console.log(numberOfWords);

// 32
function capitalizeWords(text) {
    let words = text.split(' ');

    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let result = capitalizedWords.join(' ');

    return result;
}

let originalText = "hello world";
let capitalizedText = capitalizeWords(originalText);
console.log(capitalizedText);

// 33
function sumOfNumbers(str) {

    let numbers = str.split(',');

    let numericValues = numbers.map(number => parseFloat(number));

    let sum = numericValues.reduce((accumulator, currentValue) => {
        if (!isNaN(currentValue)) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0);

    return sum;
}

let inputString = "1.5, 2.3, 3.7, 4.1";
let result = sumOfNumbers(inputString);
console.log(result);

// 34

function extractWords(text) {
    const wordsArray = text.match(/\b\w+\b/g);
    
    return wordsArray || [];
  }

  const text = "Hello, how are you today?";
  const result = extractWords(text);
  console.log(result);
  
//   35

function csvToArray(csvText) {
    let rows = csvText.split('\n');
    
    let result = [];

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].split(',');

        result.push(cells);
    }

    return result;
}

let csvText = "Name,Age,Location\nJohn,25,New York\nJane,30,Los Angeles\nBob,22,Chicago";

let csvArray = csvToArray(csvText);

console.log(csvArray);

// 36

function stringToArray(inputString) {
    return inputString.split('');
}

let myString = "Hello, World!";
let charArray = stringToArray(myString);

console.log(charArray);

// 37

function stringToAsciiArray(inputString) {
    let asciiArray = [];

    for (let i = 0; i < inputString.length; i++) {
        let asciiCode = inputString.charCodeAt(i);
        asciiArray.push(asciiCode);
    }

    return asciiArray;
}

let myText = "Hello, World!";
let asciiArray = stringToAsciiArray(myText);

console.log(asciiArray);

// 40

function bubbleSort(arr){
    let counter = 0
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++){
        if (arr[j] > arr[j + 1]) {
            const tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
        counter++
    }
    
}
console.log(counter);
console.log(arr);
}

const test = [33, 245, 1, 15, 111, 5, 65, 90];
bubbleSort(test)

// 43

function extractColumn(matrix, columnIndex) {
    let column = [];
  
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] && matrix[i].length > columnIndex) {
        column.push(matrix[i][columnIndex]);
      } else {
        column.push(undefined);
      }
    }
  
    return column;
  }
  
  let twoDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let columnNumber = 1;
  
  let resulT = extractColumn(twoDimArray, columnNumber);
  console.log("Extracted column:", resulT);

//   44

function binaryToDecimal(binaryString) {

    let decimalNumber = parseInt(binaryString, 2);
  
    return decimalNumber;
  }
  
  let binaryString = "1101";
  let decimalNumber = binaryToDecimal(binaryString);
  console.log("Decimal equivalent:", decimalNumber);


//   47

function deepCopyJaggedArray(arr) {
    if (!Array.isArray(arr)) {
      return arr;
    }
  
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = deepCopyJaggedArray(arr[i]);
    }
  
    return newArr;
  }
  
  let originalArray = [1, [2, 3], [4, [5, 6]]];
  let copiedArray = deepCopyJaggedArray(originalArray);
  
  originalArray[0] = 100;
  
  console.log(originalArray);
  console.log(copiedArray); 
  
//   49

function shuffleArray(array) {
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];

    }
    return shuffledArray;
  }
  
  let originalArray = ["apple", "banana", "cherry", "date", "elderberry"];
  let shuffledArray = shuffleArray(originalArray);
  
  console.log(originalArray);
  console.log(shuffledArray); 

// 50

function generateUniqueRandomNumbers(n) {
    if (n <= 0) {
      console.error("Iltimos, 0 dan katta musbat son bering.");
      return [];
    }
    let numbersArray = Array.from({ length: n }, (_, index) => index + 1);

    for (let i = numbersArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
    }
    return numbersArray.slice(0, n);
  }
  
  let n = prompt("number");
  let result = generateUniqueRandomNumbers(n);
  console.log(result);



  
  

  
  











