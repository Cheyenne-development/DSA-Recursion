function nthTriangularNumber(n) {
  if (n === 1) {
    return n;
  }
   nextDigit = nthTriangularNumber(n - 1);
  
  return n + nextDigit
}

console.log(nthTriangularNumber(1000))

/* since this is a Gaussian summation
this is the easier way to do it.
*/
function gaussianSum(n){
  return n *(n + 1)/2
}

console.log(gaussianSum(100000000000))

/* at somepoint less than 100,000 the maximum call stacksize is exceeed in
in the recursive funtion guassian sum works to at least ten billion before it
starts spitting out results in exponential form
*/