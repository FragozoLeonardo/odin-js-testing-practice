const reverseString = require('./reverseString');

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string containing a number', () => {
    expect(reverseString('hello2')).toBe('2olleh');
});

test('works with an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('correctly reverses a string with spaces', () => {
    expect(reverseString('hi there')).toBe('ereht ih');
});