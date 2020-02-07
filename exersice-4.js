var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(test){

    test.splice(4,1,"Pria", "SMA Internasional Metro")
    test.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
    console.log(test)


    tanggal = test[3].split('/')
    tanggal2 = test[3].split('/')
    var bulan
    switch (tanggal[1]){
        case '01' :
            bulan = 'January'
        break
        case '02' :
            bulan = 'February'
        break
        case '03' :
            bulan = 'March'
        break
        case '04' :
            bulan = 'April'
        break
        case '05' :
            bulan = 'May'
        break
        case '06' :
            bulan = 'June'
        break
        case '07' :
            bulan = 'July'
        break
        case '08' :
            bulan = 'August'
        break
        case '09':
            bulan = 'September'
        break
        case '10' :
            bulan = 'October'
        break
        case '11' :
            bulan = 'November'
        break
        case '12' :
            bulan = 'December'
        break
      }
    console.log(bulan)

    console.log(tanggal.sort(function(a, b){return b-a}))

    console.log(tanggal2.join('-'))

    console.log(test[1].slice(0,15))



}


dataHandling2(input)

//dataHandling2(input);
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]




/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */