// WHILE DONGUSU
/*
While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir
verdiğimiz koşul sağlandığı sürece döngü devam eder.
Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz
genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır. 
Bir şey olana kadar terimini kullanırız.
*/

// while(kosul) {
//     yapılacak islem;
// }

// let counter = 0;

// while (counter < 10) { //içine verdiğimiz koşula kadar çalışır.
//     console.log(counter);
//         counter++;  
// }

let userName = "";

while (!userName) { //değer boşsa çalışmaya devam eder. Aksi bir durumda sonlandırır. Yani burada isim girmediğimiz sürece çalışır.
    userName = prompt("Kullanıcı adını giriniz");
    console.log(userName);    
}

// VİDEO SONRASI NOTLAR

let degisken = 1;
//sınırlandırma verebilmek icin bir degisken atiyoruz.

while (degisken <= 10) {
    //olusturdugumuz degiskeni kosul olarak ekliyoruz.
    console.log("degiskenin degeri: " + degisken);

    degisken++;
    //dongu sonsuz olmaması icin degiskeni arttiriyoruz.
}


//ÖRNEK

// Bir dizi oluşturuyoruz ve içine beş farklı otomobil markası ekliyoruz.
let cars = ["Honda", "Mercedes", "BMW", "Fiat", "Renault"];

// 'i' adında bir değişken oluşturuyoruz ve 0 değeri ile başlatıyoruz.
let i = 0;

// while döngüsü başlatılıyor. Döngü, dizinin sonuna kadar (undefined olmayan her eleman için) devam edecek.
while (cars[i]) {
    // Her döngü adımında, dizinin 'i' indeksindeki otomobil markasını ekrana yazdırıyoruz.
    console.log(cars[i]);
    
    // Sonraki elemana geçmek için 'i' değişkenini bir artırıyoruz.
    i++;
}


