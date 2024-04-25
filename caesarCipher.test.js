const caesarCipher = require('./caesarCipher');

describe('Caesar Cipher', () => {
    test('shifts letters correctly', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('keeps the same case', () => {
        expect(caesarCipher('AbcXyZ', 2)).toBe('CdeZaB');
    });

    test('ignores punctuation', () => {
        expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
    });

    test('works with negative shifts', () => {
        expect(caesarCipher('bcd', -1)).toBe('abc');
    });

    test('works with large shifts', () => {
        expect(caesarCipher('abc', 26)).toBe('abc');
        expect(caesarCipher('abc', 27)).toBe('bcd');
    });
});