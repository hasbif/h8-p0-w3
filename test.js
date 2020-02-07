function angkaPalindrome(num) {
    // you can only write your code here!

    //palindrome check
    function palindrome(nom) {
        var no = nom.toString();
        var back = ''
        for (var i = no.length-1; i>=0;i--){
            back += no[i]
        }
        if (no == back){
            return true
        
        } return false
      }




    out = num + 1

    while(palindrome(out) == false){
        out += 1
    }

    return out

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001