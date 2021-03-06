let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function mazeSolver(mazeArr) {
  let result = ''

  function findpath(x, y) {


    // illegal move check
    if (x < 0 || x > (mazeArr[0].length - 1) || y < 0 || y > (mazeArr.length - 1)) return false; //if it is outside of maze
    if (mazeArr[y][x] == '*') return false; //it is not open

    // end move check
    if (mazeArr[y][x] === 'e') {
      console.log('Reached goal at: [' + y + '][' + x + ']');
      return true; // if it is the goal (exit point)
    }

    if (mazeArr[y][x] == '9' || mazeArr[y][x] == '8') {
      return false;
    }
    console.log('Im here at: [' + y + '][' + x + ']');
    //mark visited
    mazeArr[y][x] = '9';
    console.log(mazeArr)

    if (findpath(x + 1, y)) {
      result = 'R' + result;
      return true;
    }
    if (findpath(x, y + 1)) {
      result = 'D' + result;
      return true;
    }
    if (findpath(x, y - 1)) {
      result = 'U' + result;
      return true;
    }
    if (findpath(x - 1, y)) {
      result = 'L' + result;
      return true;
    }

    mazeArr[y][x] = '8'; //unmark x,y as part of solution path outlined by "8"

    return false;
  }

  findpath(0, 0);
  return result;
}
console.log(mazeSolver(maze))