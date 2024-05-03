// STRING MANIPULATION FUNCTION

//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//count characters
function countCharacters(str) {
    return str.length;
}

//capitalize words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}


//ARRAY FUNCTIONS

//Finding maximum and minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

//sum of array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

//filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

//MATHEMATICAL FUNCTION

//Factorial
function filterArray(arr, condition) {
    return arr.filter(condition);
}

//prime number check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}


//Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}