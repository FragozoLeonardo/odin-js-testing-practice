function shiftChar(char, shift) {
  const isUpperCase = char === char.toUpperCase();
  let baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  if (/[a-zA-Z]/.test(char)) {
      let code = char.charCodeAt(0) - baseCode;
      code = (code + shift + 26) % 26;
      return String.fromCharCode(code + baseCode);
  }
  return char;
}

function caesarCipher(str, shift) {
  return str.split('').map(char => shiftChar(char, shift)).join('');
}

module.exports = caesarCipher;