/* complex_code.js */

/**
 * This code calculates the factorial of a given number using recursion.
 * It also provides additional functionality such as checking if a number
 * is prime, computing the Fibonacci sequence, and calculating the sum of
 * digits in a number.
 */

// Function to calculate the factorial of a number
function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to compute the Fibonacci sequence up to a given limit
function fibonacci(limit) {
  let sequence = [0, 1];
  
  while (sequence[sequence.length - 1] < limit) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }
  
  return sequence;
}

// Function to calculate the sum of digits in a number
function sumOfDigits(number) {
  let sum = 0;
  
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  
  return sum;
}

// Example usage
const num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);
console.log(`Is ${num} a prime number? ${isPrime(num)}`);
console.log(`Fibonacci sequence up to ${num}: ${fibonacci(num)}`);
console.log(`Sum of digits in ${num}: ${sumOfDigits(num)}`);