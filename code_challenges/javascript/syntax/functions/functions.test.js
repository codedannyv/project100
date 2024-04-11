import { describe, it, expect } from "vitest";
import * as fx from "./functions.js"


describe("add function", () => {
    it("returns 10 when adding 8 and 2", () => {
        // Arrage
        const num1 = 8
        const num2 = 2
        const expected = 10

        // Act
        const result = fx.summation(num1, num2);

        // Assert
        expect(result).toEqual(expected);
    });

})

describe("convertMinutes function", () => {
    it("when given a one minute it returns 60 seconds", () => {
        // Arrange
        const min = 1;
        const expected = 60;

        // Act
        const result = fx.convertToSeconds(min);

        // Assert
        expect(result).toEqual(expected);
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
        expect(result).toEqual(expected);
    });

    it("returns false if number is odd", () => {
        // Arrange
        const oddNum = 9;
        const expected = false;

        // Act
        const result = fx.evenOdd(oddNum);

        // Assert
        expect(result).toEqual(expected);
    });

    it("returns true if number is zero", () => {
        // Arrange
        const zero = 0;
        const expected = true;

        // Act
        const result = fx.evenOdd(zero);

        // Assert 
        expect(result).toEqual(expected);
    })
});