function pasanganTerbesar(num) {
    var arr = num.toString().split('');
    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
      result[i] = Number(arr[i] + arr[i + 1]);
    }
    var current_max = result[0];
    for (var j = 1; j < result.length; j++){
      if(result[j] > current_max){
        current_max = result[j];
      }
    }
    return current_max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  