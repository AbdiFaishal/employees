// sumber : https://stackoverflow.com/questions/20738935/how-to-display-pyramid-using-javascript

// Hasil yang diminta :

//     *
//    ***
//   *****
//  *******
// *********
// Piramida Segitiga

function pyramid(n) {
  // Input or number of rows
  for (var i = 1; i <= n; i++) {
    var rowResult = '';
    // For every each counter there exist 2*n-1 value
    for (var j = 1; j <= 2 * n - 1; j++) {
      // Hint: Check the workbook image
      j >= n + 1 - i && j <= n - 1 + i
        ? (rowResult += '*')
        : (rowResult += '=');
    }
    console.log(rowResult);
  }
}
pyramid(5);

// =======================================================
// Hasil yang diminta :

// *
// **
// ***
// ****
// *****

//Piramida Segitiga left-angle
function pyramid(n) {
  // Input or number of rows
  for (var i = 1; i <= n; i++) {
    var rowResult = '';
    for (var j = 1; j <= n; j++) {
      j <= i ? (rowResult += '*') : (rowResult += ' ');
    }
    console.log(rowResult);
  }
}
pyramid(5);

// refactor using 1 loop only
function generatePyramid(num) {
  let rowResult = '';

  for (let i = 1; i <= num; i++) {
    rowResult += '*';
    console.log(rowResult);
  }
}
generatePyramid(5);

// =======================================================
// Hasil yang diminta :

//     *
//    **
//   ***
//  ****
// *****

function pyramid(n) {
  // Input or number of rows
  for (var i = 1; i <= n; i++) {
    var rowResult = '';
    for (var j = 1; j <= n; j++) {
      j <= n - i ? (rowResult += ' ') : (rowResult += '*');
    }
    console.log(rowResult);
  }
}
pyramid(5);

// =======================================================
// Hasil yang diminta :

// *****
// ****
// ***
// **
// *

//Piramida Segitiga terbalik
function pyramid(n) {
  // Input or number of rows
  for (var i = 1; i <= n; i++) {
    var rowResult = '';
    for (var j = n; j >= 1; j--) {
      j >= i ? (rowResult += '*') : (rowResult += ' ');
    }
    console.log(rowResult);
  }
}
pyramid(5);

// =======================================================
// Hasil :

// *****
//  ****
//   ***
//    **
//     *

function pyramid(n) {
  // Input or number of rows
  for (var i = 1; i <= n; i++) {
    var rowResult = '';
    for (var j = 1; j <= n; j++) {
      j >= i ? (rowResult += '*') : (rowResult += ' ');
    }
    console.log(rowResult);
  }
}
pyramid(5);
