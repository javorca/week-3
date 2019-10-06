function groupAnimals(animals) {
    var result = [];
    var index = 0;
    animals.sort(); // sort berdasarkan huruf awal
    
    for (var i = 0; i < animals.length; i++) {
      if (result.length === 0) {
        result.push([animals[i]]);  
      } else if (result[index][0][0] === animals[i][0]) {
        result[index].push(animals[i]);// apabila huruf awal result sama dengan huruf awal animals push animals[i] pada result
      } else { 
        result.push([animals[i]]);
        index++; // apabila tidak ada yang sama buat index baru
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log('\n');
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]