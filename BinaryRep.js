function toBinary(num) {
    if (num == 0) {
      return 0;
    } else {
      return num % 2 + 10 * (toBinary(Math.floor(num / 2)))
    }
  }
  console.log(toBinary(25))