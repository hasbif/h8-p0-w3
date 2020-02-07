stri = 'contoh'

function balikString(string) {
    var output = ''
    var j = string.length -1
    for (var i = 0; i<string.length; i++){
        output += string[j]
        j--
    }
    return output
  }

  console.log(balikString(stri))