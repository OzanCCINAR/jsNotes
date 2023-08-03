// BREAK VE CONTINUE KULLANIMI

//Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlar.

//BREAK
/*
break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar.
break ifadesi sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerlidir.

ETIKETLI BREAK:
etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

CONTINUE:
continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini 
başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde
geçerli oluşudur.


ETIKETLI CONTINUE:
etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.
*/


let counter = 0;

for (; counter < 10; counter++) {
    if (counter === 5) {break;} // 5 değerini gördüğü yerde işlemi sonlandırır.
    console.log(counter);
}
// ****************************************************************************
let number = 0;

for (; number < 10; number++) {
    if (number === 5) {continue;}// 5 değerini atlar ve devam eder.
    console.log(number);
}   

// ****************************************************************************

let LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipiscing', 'elit'
]

const ulDOM = document.querySelector('#userlist');

let index  = 0;

// for(; index < LOREM_LIST.length; index++) {
//     if (LOREM_LIST[index] == "dolor") {break;} dolor'a gelince işlemi durdurur.
//     let liDOM = document.createElement('li');
//     liDOM.innerHTML = LOREM_LIST[index];
//     ulDOM.appendChild(liDOM);   
// }

// **************************************************************************** 

for(; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") {continue;} // dolor'a gelince atlayıp diğerlerini yazdırmaya devam eder.
        let liDOM = document.createElement('li');
        liDOM.innerHTML = LOREM_LIST[index];
        ulDOM.appendChild(liDOM);   
    }   

//*****************************************
//VİDEO SONRASI NOTLAR

//İç içe döngü örneği
//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
//dış döngü tamamlanana kadar yani her bir sayı arttığında iç döngüde 3'e kadar saymaya devam eder.

for(let i = 0; i <= 10; i++) {
    console.log("dış döngü:  " +   i);
    for(let j = 0; j <= 5; j++) {
        if(j ==3){
            break;
        }
        console.log("iç döngü " + j);
    }
}

// ******************************************************
//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.

console.log("----------------------------------------------------")
cikis_etiketi: for (var i = 0; i <= 5; i++) {//6 kere bu döngünün içerisindeki iç döngü döner.Çünkü continue'yi önce değil sonra kullandık.
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        break cikis_etiketi;// break dersek tek bir döngü olur continue dersek 5 döngü olur. yani 1'den 8'e kadar 5 kere döner!!!.
      }
      console.log("iç döngüden j :" + j);
    }
   }


// **********************************************************
//Etiketli Continue Örneği

/*
Not:Döngü dış döngüden başlar sonrasında her iç döngü verdiğimiz koşulda tamamlandıkça dış döngüye geçiş yaparız.   */
console.log("------------------------------------------------------")
gec_etiketi: for (var i = 0; i <=5; i++) {
    // console.log("dış döngüden İ:" + i)
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }   
/*
İç içe iki döngü bulunmaktadır. Dış döngü, i değeri 0'dan 5'e kadar dönerken, iç döngü j değeri 0'dan 50'ye kadar döner.

İç döngüde, j değeri 9 olduğunda continue cikis_etiketi; ifadesi çalışır.
Bu ifade, iç döngünün geri kalanını atlar ve dış döngünün bir sonraki adımına geçer.

Bu nedenle, iç döngü 0'dan 8'e kadar döner ve console.log ifadesi tarafından "iç döngüden j : [j değeri]" şeklinde çıktı üretilir.

Dış döngü ise 6 kez tekrarlandığı için iç döngü de 6 kez çalışır.
 Ancak iç döngüdeki continue ifadesi nedeniyle 9 değeri atlanır ve sonuçta 0-8 arasındaki değerler çıktı olarak görülür.
*/

   
