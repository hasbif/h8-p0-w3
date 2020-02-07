function targetTerdekat(arr) {
  // you can only write your code here!
  var count = 0
  val = false

  //x check
  for(var i=0; i<arr.length;i++){
    if (arr[i] == 'x'){
      val = true
      break
    }else {val = false}
  }

  //gap count
  if (val == true){
  for(var i=0; i < arr.length;i++){
    if (arr[i] == 'o'){
      var j = i
      while (arr[j]!== 'x'){
        count++
        if (j == arr.length-2){
          j = -1
        }
        j++
      }
    }
  }
  } else {count = 0} 
  return count
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2