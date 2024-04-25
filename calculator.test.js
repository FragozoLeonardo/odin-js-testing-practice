const calculator = require('./calculator');

describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
    });
});