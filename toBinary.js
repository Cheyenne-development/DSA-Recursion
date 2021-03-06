function toBinary(number) {
  if (number === 0 || number === 1) {
    return number.toString();
  }
  const lowestBit = (number % 2).toString();
  const restOfBits = Math.floor(number / 2);
  const binaryConversion = toBinary(restOfBits);
  return binaryConversion + lowestBit;
}
console.log(toBinary(1023))