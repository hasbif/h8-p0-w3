function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var out
  for(var i=0;i<arr.length-2;i++){
    if (arr[i+1] - arr[i] == arr[i+2]-arr[i+1]){
      out = true
    }else {out = false
    break
    }


  }
  return out
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false