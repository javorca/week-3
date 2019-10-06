function palindrome(kata) {
    var newString = "";
    var str = kata;
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    if(newString === str){
      return true
    } else {
      return false
    }

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false