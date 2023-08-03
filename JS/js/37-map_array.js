// Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması

//kısa özet arrayler hakkında!!
//dizi oluşturma
let meyveler = ["kivi","muz"];

console.log(meyveler.length);//2

//dizideki elemana ulaşma

let ilkMeyve = meyveler[0];

let sonMeyve = meyveler[meyveler.length -1];

//*******************************************************

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

//userName icinde orjinal isim kalsın
//shortname icinde ilk harf buyuk . (A.)
//newName icinde ilk harf buyuk olsun

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

//Her bir kullanıcı adı için bir nesne oluşturuyoruz.
const USERS_OBJ = USERS.map(item =>
     {
    return {
        userName: item, //userName'i orjinal halinde USERS değerlerinde tuttuk.
        shortname: `${item[0]}.`, //shortname'de ilk harfinin yanına nokta ekliyoruz.
        newname:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`//newName'de ilk harfi büyük, diğerleri küçük olacak şekilde düzenliyoruz.
    }

    }
)
console.log(USERS_OBJ)

console.log("*******************************");

const USERS_OBJECT = USERS.map( item => (
    {username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
)
)
console.log(USERS_OBJECT)

console.log("*******************************"); 
//*******************VİDEO SONRASI NOTLAR*******************
//örnek = bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;
const sayılar = [2, 3, 4, 5, 10]
const yeniArray = sayılar.map(deger => {//yeni bir array tanımladık ve buna map ile deger adını verdiğimiz fonksiyonlar sayılar
    return deger * 2                     // array'in 2 ile çarpılmış değerlerini atadık.
})
 console.log(sayılar)
 console.log(yeniArray)// 2 ile çarpılmış değerler.
console.log("**********************************");

//*************************************************
//örnek
const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((e)=>{
    if (e > 3000) {
    return e * 1.15;
    }
    else {
    return e * 1.25;}
});

console.log(yeniMaaslar);   
