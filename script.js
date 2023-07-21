'use script';

// 1.Write a JavaScript program to check if a number is positive, negative, or zero.
const checkNumber = (number) => {
  if (number > 0) {
    return 'Number is positive';
  } else if (number < 0) {
    return 'Number is positive';
  } else {
    return 'Number is Zero';
  }
}

console.log(`Answer for problem 1 is ${checkNumber(8)}`);

// 2.Create a function that takes two numbers as arguments and returns their sum

const sum = (numOne, numTwo) => {
  return numOne + numTwo;
}
console.log(`Answer for problem 2 is ${sum(15, 30)}`);

// 3.Write a program to find the maximum of two given numbers.

const maximumOfNumber = (numOne, numTwo) => {
  return (numOne > numTwo) ? numOne : numTwo;
}
console.log(`Answer for problem 3 is ${maximumOfNumber(15, 30)}`);

// 4.Create a function that takes a string as input and returns its length.

const lengthOfString = (string) => {
  return string.length;
}
console.log(`Answer for problem 4 is ${lengthOfString('string')}`);

// 5.Write a JavaScript function to check if a given number is prime or not

const checkPrimeNumber = (number) => {
  if (number > 1) {
    let flag = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        flag += 1;
      } else if (flag > 2) {
        break;
      }
    }
    if (flag === 2) {
      return `${number} is a prime number`
    } else {
      return `${number} is not a prime number`
    }
  } else if (number === 1) {
    return `${number} is neither a prime number nor composite number`
  }
}

console.log(`Answer for problem 5 is \n${checkPrimeNumber(11)}`)

// 6.Write a function to sort given array
const arr = [15, 20, 14, 5, 10];

const sortingArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(`Answer for problem 6 is \n${sortingArray(arr)}`)