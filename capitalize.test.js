const capitalize = require('./capitalize');

test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('does not change the case of other letters', () => {
    expect(capitalize('hElLo')).toBe('HElLo');
});

test('returns an empty string when provided an empty string', () => {
    expect(capitalize('')).toBe('');
});

test('correctly handles strings with only one character', () => {
    expect(capitalize('a')).toBe('A');
});

test('leaves strings without alphabets unchanged', () => {
    expect(capitalize('123')).toBe('123');
});