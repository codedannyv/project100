import { describe, it, expect } from "vitest";
import * as fx from "./function.js";

describe("add function", () => {
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

describe("convertMinutes function", () => {
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


describe("even odd function", () => {
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

describe("Max function", () => {
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

describe("reverseString", () => {
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

describe("reverseStringRecursion", () => {
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

describe("return nth function", () => {
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

describe(" factorial function", () => {
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

describe(" factorial recursion function", () => {
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


describe("palidrome test function", () => {
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

describe("palidrome test function", () => {
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

describe("longest word function", () => {
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

describe("longest word recursive function", () => {
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