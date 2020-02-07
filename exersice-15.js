function groupAnimals(animals) {
  // you can only write your code here!\
  var out=[]
  var tmp = []


  animals.sort()

  for (var i = 0; i<animals.length; i++){
    tmp = []
    if (i == animals.length-1){
      out.push(animals[i])
      break
    }

    if (animals[i][0] == animals[i+1][0]){
      tmp.push(animals[i],animals[i+1])
      i++
    }else {tmp.push(animals[i])}

    out.push(tmp)
  }

  return out
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]