//OBJECT(NESNE) NEDİR? NASIL OLUŞ OLUŞTURULUR?
/* 
JavaScript Object
JavaScript’in en temel veri tipi kabul edilen objeler, son derece önemlidir ve nasıl çalıştıklarını bilmek
bir front-end developer için hayati önem taşır. Bu yazıda JavaScript objelerinin teorik çalışma mantığını örneklerle göreceksiniz.

Objenin basit tanımı
Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.)
veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.
*/

let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj:", typeof(arrayObj));
console.log("object1:", typeof(object1));

let item1 = new Object()
let item2 = {}
console.log("item1:", typeof(item1));
console.log("item2:", typeof(item2));

//object oluşturmak
let item3 = {}
let item4 = new Object();

console.log("object1:", object1)//obj: 1

//VİDEO SONRASI NOTLAR
//aynı değere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";

console.log(mesaj == başkaBirMesaj); //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
    mesaj: "merhaba"
}
let baskaBirObje = {
    mesaj: "merhaba"
}
console.log(obje == baskaBirObje); //false
/*Bu örnekte görüldüğü gibi, aynı primitive değerlere sahip olan “mesaj” ve “başkaBirMesaj” isimli değişkenler eşit kabul ediliyor.
Fakat “obje” ve “başkaBirObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar.
Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar,
bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar. */

//Obje oluşturmak
/*Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create()
fonksiyonuyla. Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir.
Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar. */

//OBJECT LITERALS
/*JavaScript’te obje oluşturmanın en kolay yolu olarak bilinir.
Süslü parantez {} kullanılarak oluşturulan objenin içerdiği property'lerin değerleri iki nokta : işaretiyle belirtilir. 
Property'ler birbirlerinden virgül , ile ayrılır. */

let countriesTalkSpanish = {
    continent: "South America",
    language: "Spanish"
}
//countriesTalkSpanish isimli obje, continet ve language adında iki propertye sahip. Bu property'ler de iki primitive değeri barındırıyor.

//NEW KEYWORD İLE OBJE OLUŞTURMAK
/*New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından)
birini(Object, Array, Date vb.) yazmak ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir.
Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır */
let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "Africa";
countriesTalkFrench.language = "French";
console.log(countriesTalkFrench);
/*objemizi new keyword ile initialize ettikten sonra property'lerini atadık.
Dikkat, Object literal’dakinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık. */

/*
OBJECT.CREATE
Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken
nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. */
let noInheritence = Object.create(null); // herhangi bir kalıtım(inheritence) almaz.
//Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.

let argentina = Object.create(countriesTalkSpanish)
let uruguay = Object.create(countriesTalkSpanish)
/*
argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan kalıtım alacağı 
için onunla aynı property'lere sahip olur. Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu,
kalıtım yoluyla sahip olduğu property'lerden belli eder. */
uruguay.capital = "Montevideo"
argentina.capital = "buenos aires"
console.log(countriesTalkSpanish)
console.log(argentina)//Prototype olarak countriesTalkSpanish prototype'larını ekstra olarak alır.
console.log(uruguay)