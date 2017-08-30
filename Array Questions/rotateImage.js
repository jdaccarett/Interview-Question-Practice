// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.
//
// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
//
// Example
//
// For
//
// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be
//
// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
// Input/Output

// [output] array.array.integer

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]


function rotateImage(a) {
  b = [];  //initialize array
  var counter = 0; //counter will fill each row i will fill column
  for (var k = 0; k < a.length; k++){
      b.push([]); // will duplicate array passed structure(cols, rows);
  }

  while(counter < a.length) { //while loop will stop at each row
    for (var i = 0; i < a.length; i++){ //for loop will fill the rows.
      b[counter].push(a[(a.length - 1) - (i)][counter]);
    }
    counter++;
  }
  return b;
}

rotateImage(a);
