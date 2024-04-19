// 1. Write a function that takes two numbers as arguments and returns their sum.

export function summation(a, b) {
    return a + b
};

// 2. Write a function that converts minutes into seconds.
export function convertToSeconds(m) {
    return m * 60;
}


// 3. Write a function that returns true if a number is even and false if it's not.
export function evenOdd(num) {
    return num % 2 === 0 ? true : false;
};


// 4. Recreate the Math.max function without using it. The function takes an array of numbers and returns the highest number.
export function max(arr) {
    if (arr.length === 0) {
        return -Infinity
    };
    let val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (val < arr[i]) {
            val = arr[i]
        }
    }
    return val
}

// 5. Write a function that takes a string and returns it reversed without using the .reverse() method.
export const reverseString = (string) => {
    let reversed = ""
    for (let i = (string.length - 1); i > -1; i--)  {
        reversed += string[i]
    }
    return reversed
};

// 6. Write a function that takes an array and an integer n and returns the nth element of the array.

export const returnElement = (arr, n) => {
    if (n > arr.length || n <= 0) {
        throw new Error('Index out of bounds')
    }
    return arr[n - 1]
}


// 7. Write a function that takes a number and returns its factorial.
export const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

export const factorialRecursion = (n) => {
    if (n === 0) {
        return 1
    }
    return n * factorialRecursion(n - 1)
}

// 8. Write a function that checks if a string is a palindrome (reads the same backward as forward).

export const palindrome = (word) => {
    let result = word[word.length - 1];
    for (let i = word.length - 2; i >= 0; i--) {
        result += word[i]
    }
    return word === result
}

// 9. Write a function that takes a string and returns the longest word in the string.
// input: Hello, World!
// output: World. 
export const longestWord = (phrase) => {
    // split phrase into words
    const words = phrase.split(/\s+/)

    // Initialize variables to keep track of longest word and it's length
    let longest = '';
    let maxLength = 0;

    // loop through each word
    // (let word of words)
    // (let word in words)
    for (let i = 0; i < words.length; i++) {
        // remove non-alphabetic characters
        const cleanWord = words[i].replace(/[^A-Za-z]/, '')

        // if the clean word is longer than current longest word update variables
        if (cleanWord.length > maxLength) {
            longest = cleanWord;
            maxLength = cleanWord.length;
        }
    }

    return longest;
}

export const longestWord2 = (phrase) => {
    let longest = ''
    let currentWord = ''

    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i]

        if (/[A-Za-z]/.test(char)) {
            currentWord += char
        } else {
            if (currentWord.length > longest.length) {
                longest = currentWord
            }
            currentWord = ''
        }
    }

    if (currentWord.length > longest.length) {
        longest = currentWord
    }
    return longest
}

const phrase = "Hey World"




