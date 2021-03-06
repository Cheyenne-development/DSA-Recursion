function stringSplitter(str) {
  result = []
  const splitCharacter = '/'

  const cutPoint = str.indexOf(splitCharacter);

  if (cutPoint === -1) {
    result.unshift(str)
    return result
  }



  const first = str.slice(0, cutPoint);
  const nextString = str.slice(cutPoint + 1);
  stringSplitter(nextString);
  result.unshift(first)
  return result



}


console.log(stringSplitter('02/20/2020'))