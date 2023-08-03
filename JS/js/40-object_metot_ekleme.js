//NESNELERE NASIL METHOD EKLERİZ?
//object içinde metot nasıl ekleriz.

let user1 = {
    firstName : "Ozan Can",
    lastName : "Cınar",
    score : [1, 2, 3, 4],
    isActive: true,
    shortName: function() {//shortName artık bir fonksiyondur. Value olarak function yazarız.
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`} //O. Cınar
};
console.log(user1);

//****************************************************
console.log("******VİDEO SONRASI NOTLAR");
//VİDEO SONRASI NOTLAR

//Metotu Özellik Olarak Eklemek
/*Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi,
önceden tanımlanmış bir nesneye sonradan da eklenebilir. Öncelikle ilk durumu ele alıp aşağıdaki örneği ona göre inceleyelim.

Örneğin; "person" adında bir nesne oluşturalım ve bu nesnemiz "name", "surname","age","city"
özelliklerine ve bu kişinin bana tüm bilgilerini gösterecek bir "introduce" metoduna sahip olsun. */
let person = {
    name:"John",
    surname:"Doe",
    age:"23",
    city:"Istanbul",
    introduce: function () {
        console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
    }
}
console.log(person.introduce());

/*Bir metodun arrow function söz dizimi kullanılarak yapılmak istendiği bir durumda
özelliklere nesnenin ismiyle erişilebilir.this kullanamayız.!!!
Buna göre yukarda arrow function kullanarak oluşturduğumuz metot içerisinde özelliklere erişim şu şekilde olacaktır; */
let person2 = {
    name:"Jane",
    surname:"Doe",
    age:"23",
    city:"Paris",
    introduce: () => {
        return `My name is ${person.name} ${person.surname}, I'm ${person.age} y.o`
    }
}
console.log(person2.introduce());


/*Şimdi de önceden oluşturulmuş bir nesneye nasıl metot ekleyebiliriz ona bakalım. 
Aslında burada metodun sahip olabileceği yapı değişmiyor yani function() anahtar kelimesi veya arrow function söz dizimi
kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak person nesnemize myCity adında
yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin. */
person.myCity = function() {
    console.log(`I live ${person.city}`);
}
person.myCity();
/*Yukardaki örnekte de görüldüğü gibi nesneye yeni bir metot eklemek 
istendiğinde nesneİsmi.eklenecekMetotİsmi = function() şeklinde yapılabilir. */

//**************************************************
console.log("*****************************************")
/*Fonksiyonlar JavaScript dilinde, Function sınıfının birer objeleridir. 
Üstelik bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype bile var.
Hatta bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz. Örnek : */
let functionAdi = () => {console.log("Hello world")}
console.log(functionAdi.name);


//**************************************************
console.log("************************************************");
//JavaScript Object Constructor
/*Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keyword'ünü kullanarak da bir sınıf tanımlayabiliyorduk.
Bu yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır.
Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz. */

function Insan(isim,yas) { //constructor function(yapılandırıcı fonksiyon)
     // Bu yapılandırıcı fonksiyon, yeni bir 'Insan' nesnesi oluşturur.
    // 'isim' ve 'yas' parametreleri, nesnenin özelliklerini tanımlar

    this.isim = isim;
    // 'isim' özelliği, oluşturulan nesnenin ismini temsil eder.
    // 'isim' parametresi, yapılandırıcıya geçirilen değerle atanır.

    this.yas = yas;
     // 'yas' özelliği, oluşturulan nesnenin yaşını temsil eder.
    // 'yas' parametresi, yapılandırıcıya geçirilen değerle atanır.

    // NOT: 'this' kelimesi, yapılandırıcı fonksiyon içinde tanımlanan özelliklere
    // erişmek için kullanılır ve yeni nesneyi işaret eder.
}
// Yeni bir insan nesnesi oluşturuyoruz:
let Insan1 = new Insan("ali", 21);
console.log(Insan1);
// 'insan1' adında bir nesne oluşturuldu ve 'isim' özelliği "Ali", 'yas' özelliği ise 21 olarak ayarlandı.

//Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksiyon eklemek istersek?
//zaman değişti ve artık bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. 
//Bu fonksiyonu/özelliği öyle bir şekilde eklemeliyiz ki olmayan bir fonksiyon/özellik eklemek istiyoruz.
//Objelere özellik eklemek konusunda bir problemimiz yok çünkü bunun mutable olduğunu biliyoruz .
Insan1.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(Insan1.yeniOzellik);

console.log("*****************");
//*****************************************************************
/*Peki sınıflarda bu durum nasıl oluyor? Sınıf olarak belirlediğimiz şablona
tanımı değiştirmeden nasıl fonksiyon veya özellik ekleyebiliriz? 

İşte bu durumla karşılaştığımızda da prototype özelliği karşımıza çıkar.
Prototype, sınıflara JavaScript tarafından otomatik olarak eklenen bir objedir.
Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz.
Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz.*/
//SINIFI PROTOTYPE YARDIMIYLA FONKSİYON EKLEMEK
// Yeni bir metot ekleniyor.
Insan.prototype.yeniFonksiyon = () => {
    console.log("Hello World!");
};
// 'yeniFonksiyon' adında yeni bir metot, 'Insan' yapısının prototipine ekleniyor.
// Bu metot, tüm 'Insan' nesneleri arasında paylaşılabilir ve kullanılabilir.

// 'jane' adında bir 'Insan' nesnesi oluşturuyoruz:
let jane = new Insan("Jane", "23");

// Oluşturulan nesne üzerinden yeniFonksiyon() metodu çağrılıyor.
jane.yeniFonksiyon();
// Bu kod, 'jane' nesnesinin 'yeniFonksiyon' adlı metodu çağırmak için kullanılır.
// Ancak dikkat edilmesi gereken bir şey var: 'yeniFonksiyon', ok işlevi olarak tanımlanmıştır (arrow function).
// Bu nedenle, arrow function'lar 'this' bağlamını kendi kapsamlarına sahip oldukları yere bağlarlar,
// yani prototip olan 'Insan' nesnesini değil, global kapsamı (window) temsil ederler.
// Bu durumda 'this' kelimesi 'jane' nesnesini göstermek yerine 'window' nesnesini gösterir.
// Bu nedenle, "Hello World!" metni yerine "undefined" çıktısı alınacaktır.
// Bu tür metotlar yerine, normal bir fonksiyon tanımı kullanılarak 'this' bağlamı nesneye bağlı hale getirilebilir.
// Örneğin: Insan.prototype.yeniFonksiyon = function() { console.log("Hello World!"); };

// Not: Arrow function'ların kullanımı, bağlam (context) konusunda dikkatli olmayı gerektirir.
