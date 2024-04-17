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