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
