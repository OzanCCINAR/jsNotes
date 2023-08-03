//Object Anahtar (Key) ve Değer (Value) Yapısının Kullanımı/Erişimi
/*
Bir obje(object), {…} süslü parantezleri ile, isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir.
Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde),
value herhangi bir veri tipi olabilir. */


let laptop1 = {//object
    brand: "Apple", 
    model: "MacBook Pro",
    "2kg": 2,
}

console.log(laptop1);

//Doğru Anahtar Bilgisini Olusturmak
console.log(laptop1.brand, laptop1["brand"]);//değer iki kere yazar.
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);//eğer key value'si "2kg" gibi tırnak içindeyse bu şekilde yazdırırız.

//**************************************
//Anahtar Bilgisine Yeni Değer Eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1" //ikinci bir yol.
console.log(laptop1)

//**************************************    
//Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//**************************************    
//Anahtar Biglilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys)//1. yöntem
console.log(Object.keys(laptop1))//2. yöntem

keys.forEach (keyInfo => {
    console.log(keyInfo)// key'leri gösterir.
    console.log(laptop1[keyInfo])// değerlerini gösterir.
})

//************************************** 
//Değer Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(Object.values(laptop1))// laptop1 values'larını gösterir.

let values = Object.values(laptop1)

values.forEach (valueInfo => {//değerleri sıralar.
    console.log("value: " , valueInfo)
    // console.log(laptop1[valueInfo])
})  


console.log("VİDEO SONRASI NOTLAR");
//***************VİDEO SONRASI NOTLAR******************************/
//LİTERAL VE PROPERTY TANIMLAMARI
//Obje Örneği

let car = {
    brand: "BMW", //key(anahtar) "brand" , "BMW" value değerini tutar.
    year: 2023,   //key(anahtar) "year" , "2023" value değerini tutar.
}
//property değerlerine noktalı yazım(dot notation) kullanılarak erişebilir.
console.log(car.brand); //BMW

/*İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz.
Mevcut bir property'yi eklemek veya değiştirmek için şu şekilde yazabiliriz: */
car.model = "320i" //objeye model isminde bir key ekler ve value olarak string atar.

console.log(car.model);


//Bir propertyy’i kaldırmak için silme(delete) operatörünü kullanabiliriz:
delete car.year;//year property'sini sildik.
console.log(car)// brand ve model gözükür.

//Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (" ") içinde kullanılmalıdır:
let secondaCar = {
    brand: "Merco",
    year: "2015",
    "is manual" : true,
}

console.log(secondaCar);    
//************************************************************************************************

//SQUARE BRACET KULLANIMI
//Birden fazla kelime içeren property'ler için dot notation kullanamayız.Bunun yerine "square bracket notation" yani köşeli 
//parantezli yazım kullanılır.
let person = {}; //set(oluştur)
person["likes sea"] = true; //get (getir)
console.log(person["likes sea"]); //true (doğru)
delete person["likes sea"]; //delete(sil)

//Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir.
let animal = {} //set
let key = "flies"; // key atama
animal[key] = true //value atama

console.log(animal)// yeni objemi (animal = {"flies: true"})


//Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir.
//Sonrasında property’ye erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.
let person2 = {
    name : "Jack",
    age: 20,
};

let key2 = prompt("Kişinin hangi özelliğini ögrenmek istersiniz?");

alert(person2[key2])
//************************************************************************************************
console.log("********************************")
//COMPUTED PROPERTY KULLANIMI
/*Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz.
Buna hesaplanmış özellikler(computed properties) denir.

Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır. */

function objectify (key, value) {
    return {
 [key]: value
   }
 }
console.log(objectify("name", "Anna"));

//KOMPLEKS OBJELER KULLANIMI
//Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir.Bu nedenle kompleks uygulamalarda da
//kompleks objeler kullanılmaktadır. Kompleks bir obje örneği
let state = {
    users:[//users property (içinde obje tutan bir arraydir.)
        {name:"Brock", age: 25, favoriteColor: "red"},
        {name:"Jessie", age: 17, favoriteColor: "yellow"},
        {name:"James", age: 41, favoriteColor: "blue"},
        {name:"Winnie", age: 18, favoriteColor: "purple"}
    ],
    settings:{//settings propertysi ise obje içinde obje tutulmakta.
        version: "1.0.5",
        DNS: "105.xx.xx.xx",
        webSite: "https://www.example.com/"
    },
    banList: ["Ash", "Angelica", "Tom", "Jerry"]//"banList" property'sinde ise basit bir array tutulmakta.
}

//"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.
console.log(state.banList[2])//

console.log(state.settings.webSite)//exaple.com

console.log(state.users[2].favoriteColor)

console.log("**********************************************************")
//********************************************************
//JSON VERİ TİPİNİ OBJE OLARAK KULLANMAK
/*Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi 
ile bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz.
Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir.
Bu işlem çok basit bir şekilde yapılabilir */




//OBJE METODLARI
//Plain objects için methodlar
// Object.keys(obj) //Key'lerden oluşan bir array döner(return)
// Object.values(obj)//Value'lerden oluşan bir array döner.
// Object.entries(obj)ag//[key, value] çiftlerinden oluşan bir array döner.


let person3 = {
    name: "Jack",
    age: 20
};

console.log(Object.keys(person3))
console.log(Object.values(person3))
console.log(Object.entries(person3))

console.log("********************************")
//************************************************************************************************
//JSON METODLARI
//Objenizi Stringe veri türüne çevirip, projenizde objelerinizi direkt sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.
let birey = {
    name: "Oscar",
    age:20
};

document.getElementById("demo").innerHTML = JSON.stringify(birey);//Bu objenizi bir stringe çevirip demo id'sine basacaktır.

let stringObject = JSON.stringify(birey);

let newPerson = JSON.parse(stringObject);
//parse methodu da stringify methodunun tersi olarak çalışır ve stringi objeye çevirir.



