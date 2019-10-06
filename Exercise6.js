function angkaPalindrome(num) {
    do{
    var newString = "";
    var str = num.toString()
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    if(newString === str){
      return newString
    } else {
      num = num + 1
    }
    } while(newString !== str)

}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
