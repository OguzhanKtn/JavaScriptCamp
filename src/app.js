// Asal sayıyı bulan kod
function findPrime(...numbers) {

    numbers.map(n => {
        if (n > 2 && n % 2 == 0 || n > 3 && n % 3 == 0 || n > 5 && n % 5 == 0 || n > 7 && n % 7 == 0) {
            console.log(n + " bir asal sayı değildir.")
        } else {
            console.log(n + " bir asal sayıdır.")
        }
    })
}

findPrime(2, 3, 5, 16, 25, 19, 34, 48)

//Arkadaş sayılar
function friendNumbers(sayi1, sayi2) {
    var total1 = 1, total2 = 1
    for (var i = 2; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            total1 += i
        }
    }
    for (var i = 2; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            total2 += i
        }
    }
    if (total1 == sayi2 && total2 == sayi1) {
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır.")
    } else {
        console.log("arkadaş sayı değillerdir.")
    }


}
friendNumbers(220, 284)

// 1000'e kadar ki mükemmel sayıları bulan kod


function perfectNumbers(number) {

    for (let i = 0; i < number; i++) {
        let total = 0;
        for (let y = 1; y <= i; y++) {
            if (i % y == 0) {
                total = total + y;
            }
        }
        if ((total == 2 * i) && i >= 2) {
            console.log(i + " sayısı mükemmel bir sayıdır.");
        }
    }

}

perfectNumbers(1000);

//1000'e kadar ki tüm asal sayılar

function primeNumber(number){

    for(var n=1; n<number; n++){
        if(n > 2 && n % 2 == 0 || n > 3 && n % 3 == 0 || n > 5 && n % 5 == 0 || n > 7 && n % 7 == 0){

            
    }else{
        console.log(n + " bir asal sayıdır.")
    }
}

}
primeNumber(1000)