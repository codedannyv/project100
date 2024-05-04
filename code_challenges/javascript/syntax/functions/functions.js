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
    }

    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i]
        }
    }

    return result
}

// 5. Write a function that takes a string and returns it reversed without using the .reverse() method.
export const reverseString = (word) => {
    let result = word[word.length - 1]

    for (let i = 2; i <= word.length; i++) {
        result += word[word.length - i]
    }
    
    return result;
}

export function reverseStringRecursion(word, start=1) {
    if (start === word.length) {
        return word[0]
    }
    return word[word.length - start] + reverseStringRecursion(word, start + 1);
}

// 6. Write a function that takes an array and an integer n and returns the nth element of the array.
export function returnElement(arr, n) {
    if (n > arr.length || n <= 0) {
        throw new Error("Index out of bounds")
    }
    return arr[n - 1];
};


// // 7. Write a function that takes a number and returns its factorial.
export const factorial = (n) => {
    if (n === 0) {
        return 1
    }
    let result = n; // 4

    for (let i = n - 1; i >= 1; i--) {
        result *= i 
        // 4

    } 
    return result
}

export const factorialRecursion = (n) =>  {
    if (n === 0) {
        return 1
    }

    return n * factorialRecursion(n - 1)
}


// 8. Write a function that checks if a string is a palindrome (reads the same backward as forward).
// single word
// more than one word
// special characters
export const palindrome = (word) => {
    let result = word[word.length - 1]
    for (let i = 2; i <= word.length; i++) {
        result += word[word.length - i]
    }
    return result === word
}

export function palindromeRecursion(word, start=0, end=null) {
    if (end === null) {
        end = word.length - 1
    }

    if (start >= end) {
        return true
    }

    if (word[start] === word[end]) {
        return palindromeRecursion(word, start + 1, end - 1)
    }

    return false
}



// 9. Write a function that takes a string and returns the longest word in the string.
export const longestWord = (phrase) => {
    let longest = ''
    let currentWord = ''

    for (let i = 0; i < phrase.length; i++) {
        const wordRegex = /[A-Za-z]/
        if (wordRegex.test(phrase[i])) {
            currentWord += phrase[i]

        } else {
            if (currentWord.length > longest.length) {
                longest = currentWord;
                currentWord = ''
            }
        }
    }

    if (currentWord.length > longest.length) {
        longest = currentWord;
    }

    return longest
}

export function longestWordRecursion(phrase, index=0, longest='', currentWord='') {
    if (index === phrase.length) {
        return currentWord.length > longest.length ? currentWord : longest;
    }

    const regex = /[A-Za-z]/
    const char = phrase[index]

    if (regex.test(char)) {
        currentWord += char
    } else {
        if (currentWord.length > longest.length) {
            longest = currentWord;
        }
        currentWord = ''
    }

    return longestWordRecursion(phrase, index+1, longest, currentWord)

}


// 10. Write a function that counts the number of vowels in a string.
export const vowelCount = (phrase) => {
    let count = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (/[AEIOUaeiou]/.test(phrase[i])) {
            count += 1
        }
    }

    return count
}

export function vowelCountRecursion(phrase, index=0, count=0) {
    if (index === phrase.length) {
        return count;
    }

    if (/[AEIOUaeiou]/.test(phrase[index])) {
        count += 1
    }
    return vowelCountRecursion(phrase, index + 1, count)
}


// 11. Write a function that mimics the JavaScript .includes() method. It should take an array and a value and return true if the value is in the array.

export function myInclude(arr, sub) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === sub) {
            return true
        }
    }
    return false

}


// 12. Write a function that prints every number from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

export const FizzBuzz = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0) {
            result.push("Fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(String(i))
        }
    }
    return result
}

//13. Write a function that takes an array of numbers and returns the sum of all elements.
export const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum 
}
// use recursion
// export const sumarrayRecursion
export function sumArrayRecursion(arr, index=0, sum=0) {
    if (index === arr.length) {
        return sum
    }
    sum += arr[index]
    return sumArrayRecursion(arr, index + 1, sum) 
}

// 14. Write a function that takes a number and returns true if it is a prime number and false otherwise.
export const isPrime = (n) => {
    if (n <= 1) {
        return false
    }
    if (n === 2 || n === 3) {
        return true
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false
        }
    }

    return true
}


// 15. Write a function that mimics the JavaScript .slice() method for arrays. It should take an array, a start index, and an optional end index and return a new array.
export function mySlice(arr, start, end) {
    let a = []
    for(let i = start; i <= end; i++) {
        a.push(arr[i])
    }
    return a
}

// use recursion
export const mySliceRecursion = (arr, start, end, result=[]) => {
    if (start === (end + 1)) {
        return result
    }

    result.push(arr[start])
    return mySliceRecursion(arr, start+1, end, result)
}


// 16. Write a function that converts Celsius to Fahrenheit.
export const toFahrenheit = (num) => {
    return num * (9/5) + 32
}

// 17. Write a function that converts Celsius to Fahrenheit.
export const toCelsius = (num) => {
    return (num - 32) * (5/9)
}

// 18. Write a function that counts how many times a particular element appears in an array.
export const howMany = (arr, val) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            count += 1;
        };
    };

    return count;
};

// 19. Write a function that mimics the .indexOf() method. It should take an array and a value and return the first index at which the value exists, or -1 if it's not in the array.
export const myIndexOf = (arr, val, index=0) => {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1;
}

// 20. Write a function that takes two arrays and returns a new array that is the union of the two arrays with duplicates removed.
export const myJoin = (arr1, arr2) => {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
             result.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
             result.push(arr2[i])
        }
    }

    return result
}

// 21. Write a function that takes an array of numbers and returns an array containing only the even numbers from the original array.
export const evenArray = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Recursion
export function evenArrayRecursion(arr, start=0, result=[]) {
    if (start === arr.length) {
        return result
    }

    if (arr[start] % 2 === 0) {
        result.push(arr[start])
    }

    return evenArrayRecursion(arr, start+1, result)
}

// 22. Create a function that accepts a string as its argument and returns the string in uppercase. Try to do this without using the .toUpperCase() method.


// use recursion



// 23. Develop a function that takes two arguments: an array of strings and a single character (string of length 1). The function should return a new array containing only the strings from the input array that start with the specified character.
// input: array, string
// output: array
export const findString = (arr, char) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] === char) {
            result.push(arr[i]);
        };
    };

    return result;
}

// use recursion



// 24. Write a function that calculates the number of days between two dates. The dates will be passed to the function as strings in the format "YYYY-MM-DD".
// input: two dates:
// output: total days between two dates
export function calculateDaysBetweenDates(date1, date2) {

}

// 25. Construct a function that takes a positive integer as its argument and returns an array of all the integers that are both less than the input and prime. Use the function you wrote for checking if a number is prime from the previous set of challenges, if needed.
// input: positive integer
// output: array with all the primes less than that 



// 101. Write a function that returns a random number between two numbers (inclusive)
function randomFive(min, max) {
    let inclusive = max + 1;
    let result = [];

    for (let i = 1; i <= 5; i++) {
        result.push(Math.floor(Math.random() * (inclusive - min) + min));
    }

    console.log(result);
}



const anArray = [1, 2, 3, 4, 5, 6];
mySliceRecursion(anArray, 1, 3)