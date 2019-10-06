function tentukanDeretGeometri(arr) {
    var pengali = arr.slice(-1).pop() / arr.slice(-2, -1).pop();
    var res = true; // Pengali = Un+1/Un
    
    for (var i = 0; i <= arr.length-2; i++) {
      if (pengali * arr[i] !== arr[i+1]) {
        res = false; // Apabila array sebelum dikalian dengan pengali tidak sama dengan array selanjutnya maka deret tersebut bukan deret Geometri
      }
    }
    
    return res;
  }
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false