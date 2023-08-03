// ARRAY METOTLARININ KULLANIMI VE ARRAY İCİNDE ARRAY OLUSTURMA


let items = [1,2,3,4,5]

//Array ıcınde Array:
let femaleUsers = ["Ayse","Hulya","Merve"]
let maleUsers = ["Ahmeh","Hasan","Mehmet"]

items.unshift(femaleUsers) //0. index'e femaleUsers array'ini ekler.

items.push(maleUsers)//en son index'e maleUsers array'ini ekler.

console.log(items)

console.log(items.length) //
console.log(items[0].length)//Array icindeki istediğimiz Array'in lenght bilgisini alırız.
console.log(items[0][0])//0.index'in 0. ögesini verir.
// ************************************************************************************************

// Array icerisinden oge ayırmak -> splice(pos, item?)
let newItems = items.splice(1,5) //2. index'den 4.index'e kadar olan ögeleri newItems'a atarız.

console.log("newItems: " + newItems)
console.log("items: " + items)

// **********************************************************************
//Array icerisindeki bilgiyi String'e cevirmek -> toString, join
items.unshift("lorem")
items.push("İpsum")

// console.log(items.indexOf("İpsum"))// 3 değerini verir.!!!
console.log(items[items.indexOf("İpsum")]) // bu şekilde de direkt olarak value'yu yazdırır.
// *******************************************************************************************

//Array kopyalamak ->slice, [...ES6]
let copyItems = items
console.log("ITEMS",items)

copyItems.pop()
console.log("CopyItems",copyItems)
console.log("Items ",items)
//üstteki şekilde yaparak iki değişkenin değeri de aynı kalır.Fakat alltaki gibi yaparsak değişkenlerin değerleri farklı olur.

console.log("kopyalandıktan sonraki hali:")
copyItems= items.slice()//kopyalama yaptı
copyItems.pop()//son ogeyi cıkarttık.
console.log("CopyItems",copyItems)
console.log("items",items)

let es6Items = [...items]//es6 ile gelen kopyalama sistemi
console.log("es6Items: ",es6Items)

//iki array bilgisini birleştirmek. -> [...ES6, ...ES6]
let allUsers = [...femaleUsers,...maleUsers]//es6 ile birden fazla array birleştirmek.
console.log("allUsers: ",allUsers)

//***************************************************************************
//Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log("string'e çevirdik.",allUsers.toString())
console.log(allUsers.join(" --- "))//bir öğenini arasına girilen değeri yazar.

//***********************************************************
//Istedigimiz Index bilgisine oge eklemek -> splice (index, 0 , value)
allUsers.splice(allUsers.length,-1,"melissa")//en sonuncu index'den bir öncesine değeri ekler.
allUsers.splice(Math.floor(allUsers.length) / 2 , 0 , "lorem")//tam ortaya lorem değerini ekledik.
console.log(allUsers)


//VİDEO SONRASI NOTLAR
console.log("******VİDEO SONRASI NOTLAR*****")
//pop() var olan dizideki en son elemanı silmemizi sağlar.
let groceries = ["apple","bread","milk"];
groceries.pop();
console.log(groceries)



//************************************************************************************************

//includes() bir elemanın dizi icerisinde bulunup bulunmadığını kontrol eder. true/false olarak çıktı verir.
let groceries2 = ["apple","bread","milk"];

let hasApple = groceries2.includes("apple");
console.log(hasApple)

//************************************************************************************************

//join()
/*
Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz.
 Join metodu bu konuda yardıma yetişiyor.

Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz.
 Eğer bir parametre vermezsek virgül bastırır.
*/
let alisverisListem = ["elma", "ekmek", "süt"];

let stringAlisverisListem =  alisverisListem.join();
console.log(stringAlisverisListem);
// Çıktıda "elma,ekmek,süt" bekleriz.

let stringAlisverisListem2 = alisverisListem.join(" kiraz ");
console.log(stringAlisverisListem2);
// Çıktıda "elma kiraz ekmek kiraz süt" bekleriz.


//***************************************************************************
//concat() farklı dizileri birleştirip tek bir diziye çevirmemizi sağlar.
let yiyecekler = ["pasta","baklava","puding"];
let icecekler = ["su","kavhe"];

let menu = yiyecekler.concat(icecekler);
console.log(menu);




