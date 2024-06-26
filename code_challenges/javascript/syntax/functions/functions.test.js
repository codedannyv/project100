import { describe, it, expect } from 'vitest';
import * as fx from "./functions.js";

describe("1. add function", () => {
    it("returns 10 when adding 8 and 2", () => {
        // Arrage
        const num1 = 8
        const num2 = 2
        const expected = 10

        // Act
        const result = fx.summation(num1, num2);

        // Assert
        expect(result).toBe(expected);
    });
    it("returns -10 when adding -8 and -2", () => {
        // Arrage
        const num1 = -8
        const num2 = -2
        const expected = -10

        // Act
        const result = fx.summation(num1, num2);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("2. convertMinutes function", () => {
    it("when given a one minute it returns 60 seconds", () => {
        // Arrange
        const min = 1;
        const expected = 60;

        // Act
        const result = fx.convertToSeconds(min);

        // Assert
        expect(result).toBe(expected);
    });
});


describe("3. even odd function", () => {
    it("returns true if number is even", () => {
        // Arrange
        const evenNum = 2;
        const expected = true;

        // Act
        const result = fx.evenOdd(evenNum);

        // Assert
        expect(result).toBe(expected);
    });

    it("returns false if number is odd", () => {
        // Arrange
        const oddNum = 9;
        const expected = false;

        // Act
        const result = fx.evenOdd(oddNum);

        // Assert
        expect(result).toBe(expected);
    });

    it("returns true if number is zero", () => {
        // Arrange
        const zero = 0;
        const expected = true;

        // Act
        const result = fx.evenOdd(zero);

        // Assert 
        expect(result).toBe(expected);
    })
});

describe("4. Max function", () => {
    it("takes an array of positive numbers and returns the highest number", () => {
        // Arrange
        const anArray = [1, 2, 3, 4, 5];
        const expected = 5;

        // Act
        const result = fx.max(anArray);

        // Assert
        expect(result).toBe(expected);

    });
    it("takes an array of negative numbers and returns the highest number", () => {
        // Arrange
        const negativeArray = [-1, -2, -3, -4, -5];
        const expected = -1;

        // Act
        const result = fx.max(negativeArray);

        // Assert
        expect(result).toBe(expected);
    });
    it("if array is empty returns negative infinity", () => {
        // Arrange
        const emptyArray = [];
        const expected = -Infinity

        // Act
        const result = fx.max(emptyArray);

        // Assert
        expect(result).toBe(expected);
    })

});

describe("5. reverseString", () => {
    it("when given the string 'hello' it returns 'olleh'", () => {
        // Arrange
        const string = "hello";
        const expected = "olleh";

        // Act
        const result = fx.reverseString(string);

        // Assert
        expect(result).toBe(expected);
    })

    it("when given the string 'hello world' it returns 'dlrow olleh'", () => {
        // Arrange
        const string = "hello world";
        const expected = "dlrow olleh";

        // Act
        const result = fx.reverseString(string);

        // Assert
        expect(result).toBe(expected);
    })
});

describe("5b. reverseStringRecursion", () => {
    it("when given the string 'hello' it returns 'olleh'", () => {
        // Arrange
        const string = "hello";
        const expected = "olleh";

        // Act
        const result = fx.reverseStringRecursion(string);

        // Assert
        expect(result).toBe(expected);
    });

    it("when given the string 'hello world' it returns 'dlrow olleh'", () => {
        // Arrange
        const string = "hello world";
        const expected = "dlrow olleh";

        // Act
        const result = fx.reverseStringRecursion(string);

        // Assert
        expect(result).toBe(expected);
    });

    it("when given a sentence returns the sentence reversed", () => {
        // Arrange
        const string = "A quick brown fox jumps over the lazy dog.";
        const expected = ".god yzal eht revo spmuj xof nworb kciuq A";

        // Act
        const result = fx.reverseStringRecursion(string);

        // Assert
        expect(result).toBe(expected);

    });
});

describe("6. return nth function", () => {
    it("when given an the integer 1 it returns the first element in the array", () => {
        // Arrange
        const anArray = ["first", "second", "third"];
        const expected = "first"

        // Act
        const result = fx.returnElement(anArray, 1);

        // Assert
        expect(result).toBe(expected)
    });
    it("when given an integer that is greater than the size of the array return error", () => {
        // Arrange
        const anArray = ["first", "second", "third"];

        // Act and Assert
        expect(() => fx.returnElement(anArray, 4)).toThrowError(
            /^Index out of bounds$/
        )
    })
    it("when a given an integer that a negative number return an error", () => {
        // Arrange
        const anArray = ["first", "second", "third"];

        // Act and Assert
        expect(() => fx.returnElement(anArray, -1)).toThrowError(
            /^Index out of bounds$/
        )
    });
    it("when a given an integer that a 0 return an error", () => {
        // Arrange
        const anArray = ["first", "second", "third"];

        // Act and Assert
        expect(() => fx.returnElement(anArray, 0)).toThrowError(
            /^Index out of bounds$/
        )
    })
});

describe("7. factorial function", () => {
    it("when given the number zero return one", () => {
        // Arrange
         const expected = 1

        // Arrange
        const result = fx.factorial(0)

        // Assert
        expect(result).toBe(expected)
    })
    it("when given the number 4 return 24", () => {
        // Arrange
        const expected = 24

        // Arrange
        const result = fx.factorial(4)

        // Assert
        expect(result).toBe(expected)
    })
    it("when given the number 10 return 3628800", () => {
        // Arrange
        const expected = 3628800

        // Arrange
        const result = fx.factorial(10)

        // Assert
        expect(result).toBe(expected)
    })
})

describe("7b. factorial recursion function", () => {
    it("when given the number zero return zero", () => {
        // Arrange
         const expected = 1

        // Arrange
        const result = fx.factorialRecursion(0)

        // Assert
        expect(result).toBe(expected)
    })
    it("when given the number 4 return 24", () => {
        // Arrange
        const expected = 24

        // Arrange
        const result = fx.factorialRecursion(4)

        // Assert
        expect(result).toBe(expected)
    })
    it("when given the number 10 return 3628800", () => {
        // Arrange
        const expected = 3628800

        // Arrange
        const result = fx.factorialRecursion(10)

        // Assert
        expect(result).toBe(expected)
    })
})


describe("8. palidrome test function", () => {
    it("when given hannah returns true", () => {
        // Arrange
        const name = "hannah";
        const expected = true;
        
        // Act
        const result = fx.palindrome(name);

        // Arrange
        expect(result).toBe(expected);
    });

    it("when given hello it returns false", () => {
        // Arrange
        const word = "hello";
        const expected = false;
        
        // Act
        const result = fx.palindrome(word);

        // Assert
        expect(result).toBe(expected);

    })

    it("when given a phrase hello it returns false", () => {
        // Arrange
        const word = "hello";
        const expected = false;
        
        // Act
        const result = fx.palindrome(word);

        // Assert
        expect(result).toBe(expected);

    })
})

describe("8a. palidrome function recursion", () => {
    it("when given hannah returns true", () => {
        // Arrange
        const name = "hannah";
        const expected = true;
        
        // Act
        const result = fx.palindromeRecursion(name);

        // Arrange
        expect(result).toBe(expected);
    });

    it("when given hello it returns false", () => {
        // Arrange
        const word = "hello";
        const expected = false;
        
        // Act
        const result = fx.palindromeRecursion(word);

        // Assert
        expect(result).toBe(expected);

    })

})

describe("9. longest word function", () => {
    it("when given the phrase hey world return world", () => {
        // Arrange
        const phrase = "hey world";
        const expected = "world";
        
        // Act
        const result = fx.longestWord(phrase);

        // Assert
        expect(result).toBe(expected);

    })

    it("when given the phrase 'hey world, tonight, tomorrow'", () => {
        // Arrange
        const phrase = "hey world, tonight, tomorrow";
        const expected = "tomorrow";
        
        // Act
        const result = fx.longestWord(phrase);

        // Assert
        expect(result).toBe(expected);

    })

})

describe("9a. longest word recursive function", () => {
    it("when given the phrase hey world return world", () => {
        // Arrange
        const phrase = "hey world";
        const expected = "world";
        
        // Act
        const result = fx.longestWordRecursion(phrase);

        // Assert
        expect(result).toBe(expected);

    })

    it("when given the phrase 'hey world, tonight, tomorrow'", () => {
        // Arrange
        const phrase = "hey world, tonight, tomorrow";
        const expected = "tomorrow";
        
        // Act
        const result = fx.longestWordRecursion(phrase);

        // Assert
        expect(result).toBe(expected);

    })

})

describe("10. vowel function", () => {
    it("when given the phrase hello world returns 3", () => {
        // Arrange
        const phrase = "hello world";
        const expected = 3;
        
        // Act
        const result = fx.vowelCount(phrase);

        // Assert
        expect(result).toBe(expected);


    })
    it("when given the phrase 'hey world, tonight, tomorrow'", () => {
        // Arrange
        const phrase = "hey world, tonight, tomorrow";
        const expected = 7;
        
        // Act
        const result = fx.vowelCount(phrase);

        // Assert
        expect(result).toBe(expected);

    })
})

describe("10b. vowel function with recursion", () => {
    it("when given the phrase hello world returns 3", () => {
        // Arrange
        const phrase = "hello world";
        const expected = 3;
        
        // Act
        const result = fx.vowelCountRecursion(phrase);

        // Assert
        expect(result).toBe(expected);


    })
    it("when given the phrase 'hey world, tonight, tomorrow'", () => {
        // Arrange
        const phrase = "hey world, tonight, tomorrow";
        const expected = 7;
        
        // Act
        const result = fx.vowelCountRecursion(phrase);

        // Assert
        expect(result).toBe(expected);

    })
})

describe("11. include function", () => {
    it("when given a word in the arr return true", () => {
        // Arrange
        const places = ["first", "second", 3]
        const expected = true;
        
        // Act
        const result = fx.myInclude(places, 3);

        // Assert
        expect(result).toBe(expected);
    })

    it("when given a word not in the arr return false", () => {
        // Arrange
        const places = ["first", "second", 3]
        const expected = false;
        
        // Act
        const result = fx.myInclude(places, 'fourth');

        // Assert
        expect(result).toBe(expected);
    })
})

describe("12. FizzBuzz function", () => {
    it("returns 'Fizz' for multiples of 3 only", () => {
        // Arrange
        const expected = ["1", "2", "Fizz", "4", "Buzz"];
        
        // Act
        const result = fx.FizzBuzz(5);

        // Assert
        expect(result[2]).toBe(expected[2]); // Checking just the third element for "Fizz"
    });

    it("returns 'Buzz' for multiples of 5 only", () => {
        // Arrange
        const expected = ["1", "2", "Fizz", "4", "Buzz"];
        
        // Act
        const result = fx.FizzBuzz(5);

        // Assert
        expect(result[4]).toBe(expected[4]); // Checking just the fifth element for "Buzz"
    });

    it("returns 'FizzBuzz' for multiples of both 3 and 5", () => {
        // Arrange
        const expected = "FizzBuzz";
        
        // Act
        const result = fx.FizzBuzz(15);

        // Assert
        expect(result[14]).toBe(expected); // Checking the 15th element
    });

    it("returns the number itself if not a multiple of 3 or 5", () => {
        // Arrange
        const expected = "1";
        
        // Act
        const result = fx.FizzBuzz(1);

        // Assert
        expect(result[0]).toBe(expected); // Checking the first element
    });
});

describe("13. sum of array", () => {
    it("takes in an array and returns the sum of all values",() =>  {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expected = 55

        // Act
        const result = fx.sumArray(anArray);

        // Assert
        expect(result).toBe(expected)
    })
})

describe("13a. sum of array using recursion", () => {
    it("takes in an array and returns the sum of all values",() =>  {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const expected = 55

        // Act
        const result = fx.sumArrayRecursion(anArray);
 
        // Assert
        expect(result).toBe(expected)
    })
})


describe("14. isPrime function", () => {
    it("when given a prime number it returns true", () => {
        // Arrange
        const prime = 7;
        const expected = true;

        // Act
        const result = fx.isPrime(prime);

        // Asssert
        expect(result).toBe(expected);
    })

    it("when given a non-prime number it returns false", () => {
        // Arrange
        const notPrime = 8;
        const expected = false;

        // Act
        const result = fx.isPrime(notPrime);

        // Asssert
        expect(result).toBe(expected);
    })

    it("when given 229 returns false", () => {
        // Arrange
        const prime = 229
        const expected = true;

        // Act
        const result = fx.isPrime(prime);

        // Assert
        expect(result).toBe(expected)
    })
})

describe("15. sclicing function", () => {
    it("when given a start and end index returns the values between those two indexes in an array", () => {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6]
        const expected = [2, 3, 4]

        // Act
        const result = fx.mySlice(anArray, 1, 3)

        // Assert
        expect(result).toEqual(expected)
    }) 
})

describe("15b. sclicing function recursion", () => {
    it("when given a start and end index returns the values between those two indexes in an array", () => {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6]
        const expected = [2, 3, 4]

        // Act
        const result = fx.mySliceRecursion(anArray, 1, 3)

        // Assert
        expect(result).toEqual(expected)
    }) 
})

describe("16. celcius function", () => {
    it("when given zero return 32", () => {
        // Arrange
        const celcius = 0;
        const expected = 32;

        // Act
        const result = fx.toFahrenheit(celcius);

        // Assert
        expect(result).toBe(expected);
    })
})

describe("17. fahrenheit function", () => {
    it("when given 32 return zero", () => {
        // Arrange
        const fahrenheit = 32;
        const expected = 0;

        // Act
        const result = fx.toCelsius(fahrenheit);

        // Assert
        expect(result).toBe(expected);
    })
})

describe("18. how many function", () => {
    it("when given an array with three repeats return 3", () => {
        // Arrange
        const anArray = [1, 1, 2, 3, 5]
        const expected = 2

        // Act
        const result = fx.howMany(anArray, 1)

        // Assert
        expect(result).toBe(expected)
    })

    it("when given a value that doesn't exist in the array return 0", () => {
        // Arrange
        const anArray = [1, 1, 2, 3, 5]
        const expected = 0

        // Act
        const result = fx.howMany(anArray, 0)

        // Assert
        expect(result).toBe(expected)
    })
})

describe("19. myIndexOf function", () => {
    it("when given an array return first index where 'first' exists", () => {
        // Arrange
        const anArray = ["fifth", "fourth", "first", "second", "first"]
        const expected = 2

        // Act
        const result = fx.myIndexOf(anArray, "first")

        // Assert
        expect(result).toBe(expected)
    })

    it("when given an array and an index return next index where 'first' exists", () => {
        // Arrange
        const anArray = ["fifth", "fourth", "first", "second", "first"]
        const expected = 4

        // Act
        const result = fx.myIndexOf(anArray, "first", 3)

        // Assert
        expect(result).toBe(expected)
    })


    it("when given a value that doesn't exist in the array return -1", () => {
        // Arrange
        const anArray = ["fifth", "fourth", "first", "second", "first"]
        const expected = -1

        // Act
        const result = fx.myIndexOf(anArray, "sixth")

        // Assert
        expect(result).toBe(expected)
    })
})

describe("20. myJoin function", () => {
    it("when given two integer arrays returns a new array that is the union of the two with no duplicates", ()  => {
        // Arrange
        const array1 = [1, 2, 3, 4, 5]
        const array2 = [1, 6, 7, 8, 5]
        const expected = [1, 2, 3, 4, 5, 6, 7, 8]

        // Act
        const result = fx.myJoin(array1, array2)

        // Assert
        expect(result).toEqual(expected)
    })

    it("when given two integer arrays returns a new array that is the union of the two with no duplicates", ()  => {
        // Arrange
        const array1 = ["one", "two", "three", "four", "five"];
        const array2 = ["one", "six", "seven", "eight", "five"];
        const expected = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

        // Act
        const result = fx.myJoin(array1, array2)

        // Assert
        expect(result).toEqual(expected)
    })
})

describe("21. even numbers function", () => {
    it("given an array we need to return the even numbers in the array", () => {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6];
        const expected = [2, 4, 6];
        
        // Act
        const result = fx.evenArray(anArray)

        // Assert
        expect(result).toEqual(expected)
    })
})

describe("21b. even numbers function with Recursion", () => {
    it("given an array we need to return the even numbers in the array", () => {
        // Arrange
        const anArray = [1, 2, 3, 4, 5, 6];
        const expected = [2, 4, 6];
        
        // Act
        const result = fx.evenArrayRecursion(anArray)

        // Assert
        expect(result).toEqual(expected)
    })
})

describe("22. myToUpperCase function", () => {
    it("when given the word 'Hello World' it returns 'HELLO WORLD'", () => {
        // Arrange
        const word = "Hello World";
        const expected = "HELLO WORLD";

        // Act
        const result = fx.myToUpperCase(word);

        // Assert
        expect(result).toBe(expected)
    })
})

describe("22b. myToUpperCase function recursion", () => {
    it("when given the word 'Hello World' it returns 'HELLO WORLD'", () => {
        // Arrange
        const word = "Hello World";
        const expected = "HELLO WORLD";

        // Act
        const result = fx.myToUpperCaseRecursion(word);

        // Assert
        expect(result).toBe(expected)
    })
})

describe("23. find string in array function", () => {
    it("when given an array and a single char return new array with only strings from the input arry athat start with the specificied character", () => {
        // Arrange
        const colors = ["Blue", "Black", "Orange", "Grey", "Red"];
        const expected = ["Blue", "Black"];

        // Act
        const result = fx.findString(colors, "B");

        // Assert
        expect(result).toEqual(expected);
    })
})

describe('24. calculateDaysBetweenDates', () => {
    it('should calculate the number of days between two dates in the same year', () => {
      const result = fx.calculateDaysBetweenDates("2023-01-01", "2023-01-31");
      expect(result).toBe(30);
    });
  
    it('should calculate the number of days between two dates across different years', () => {
      const result = fx.calculateDaysBetweenDates("2022-12-31", "2023-01-01");
      expect(result).toBe(1);
    });
  
    it('should handle leap year dates correctly', () => {
      const result = fx.calculateDaysBetweenDates("2020-02-01", "2020-03-01");
      expect(result).toBe(29); // February 2020 had 29 days
    });
  
    it('should return 0 when the same date is passed twice', () => {
      const result = fx.calculateDaysBetweenDates("2023-05-01", "2023-05-01");
      expect(result).toBe(0);
    });
  
    it('should handle a span of multiple years correctly', () => {
      const result = fx.calculateDaysBetweenDates("2020-01-01", "2023-01-01");
      expect(result).toBe(1096); // Includes two leap years (2020, 2024)
    });
  
    it('should return the correct number of days regardless of date order', () => {
      const result = fx.calculateDaysBetweenDates("2023-01-01", "2022-01-01");
      expect(result).toBe(365); // Non-leap year span backwards
    });
  });

describe("prime array function", () => {
    it("when given a positive integer it returns all of the primes less than that integer", () => {
        // Arrange
        const integer = 27;
        const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23];

        // Act
        const result = fx.primeArray(integer);

        // Assert
        expect(result).toEqual(expected)
    })
})

describe("prime array function using the sieve of eratosthenes", () => {
    it("when given a positive integer it returns all of the primes less than that integer", () => {
        // Arrange
        const integer = 27;
        const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23];

        // Act
        const result = fx.sieveOfEratosthenes(integer);

        // Assert
        expect(result).toEqual(expected)
    })
})

describe("merges two sorted arrays ", () => {
    it("When given two arrays return one array with all values sorted", () => {
        // Arrange
        let array1 = [1, 3, 5, 7];
        let array2 = [2, 4, 6, 8];
        let expected = [1, 2, 3, 4, 5, 6, 7, 8]

        // Act
        const result = fx.sortCombinedArray(array1, array2);
        // Assert
        expect(result).toEqual(expected)
    })
})