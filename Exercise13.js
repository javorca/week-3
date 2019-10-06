
function targetTerdekat(arr) {

    var index_X = [];
    var index_O = [];
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] == 'x') {
        index_X.push(x);
      } else if (arr[x] == 'o') {
        index_O.push(x);
      }
    } // push index array yang mengandung o dan x pada index_X dan index_O 
  
    var tampungfinal = [];
    for (var i = 0; i < index_O.length; i++) {
      for (var j = 0; j < index_X.length; j++) {
        tampungfinal.push(Math.abs(index_X[j] - index_O[i]));
      } //Absolute jarak dantara x dan o
  
      if (
        tampungfinal.sort(function(a, b) {
          return a - b;
        })[0] === undefined
      ) {
        return 0; // Jika tidak ditemukan jarak antara x dan o return 0
      } else {
        return tampungfinal.sort(function(a, b) {
          return a - b;
        })[0]; // return jarak terdekat o dan x
      }
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
  