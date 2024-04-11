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

        //Assert
        expect(result).toEqual(expected);
    });
});