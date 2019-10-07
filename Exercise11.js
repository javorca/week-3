function tentukanDeretAritmatika(arr) {
    var beda = arr[arr.length-1] - arr[arr.length-2];//Pengurangan array terakhir dengan array kedua terakhir
    var res = true;
  
    for (var i = arr.length-1; i > 0; i--) {
      if (beda !== (arr[i] - arr[i-1])) {
        res = false;
      } // apabila selisih-nya sama dengan beda maka deret tersebut adalah aritmatika
    }
    return res;
  }

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  
