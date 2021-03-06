function anagrams(str) {
    if (str.length === 1) {return str};
    const permutations = []
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if(str.indexOf(char) != i)
        continue;
      let remainingString = str.slice(0, i) + str.slice(i + 1, str.length)
      for (let subPermutation of anagrams(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
  }
  console.log(anagrams('time'))

  /* Only gives all the permutations of words, would still be required
   to run through a dictionary to find actual words */ 