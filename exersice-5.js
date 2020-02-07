function palindrome(kata) {
  // you can only write your code here!
  var j = kata.length - 1
  var out
  var max =  Math.floor(kata.length/2)

  for (var i = 0; i<max;i++){
    if (kata[i] !== kata[j]){
      out= false
      break

    }else
    out = true
    j--
  }
  return out

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false