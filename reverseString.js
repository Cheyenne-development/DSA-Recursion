function reverseString(string){
    if(string.length === 0 || string.length === 1){
        return string
    }
  const newString = string[string.length - 1]
  const restOfString = reverseString(string.slice(0, -1))
  return newString + restOfString;
}
console.log(reverseString('hello'))