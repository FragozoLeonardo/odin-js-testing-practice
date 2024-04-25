const analyzeArray = require('./analyzeArray');

describe('Array Analysis', () => {
    test('computes the right properties', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test('works with an array of the same values', () => {
        expect(analyzeArray([2, 2, 2, 2])).toEqual({
            average: 2,
            min: 2,
            max: 2,
            length: 4
        });
    });

    test('returns correct values for a single-element array', () => {
        expect(analyzeArray([5])).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1
        });
    });

    test('handles an empty array', () => {
        expect(analyzeArray([])).toEqual({
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        });
    });
});