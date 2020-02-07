var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (arr){
    for(var i = 0; i < arr.length; i++ ){

        let id = arr[i][0]
        let name = arr[i][2]
        let tt = arr[i][2]
        let lhr = arr[i][3]
        let hobby = arr[i][4]
        console.log('Nomor ID:  '+id+'\n' + 'Nama Lengkap:  '+name+'\n' + 'TTL:  '+ tt +' '+ lhr +'\n'+'Hobi:  ' + hobby + '\n')
    }return

}



dataHandling(input)

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun