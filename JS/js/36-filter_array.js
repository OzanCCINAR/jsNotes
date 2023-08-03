// Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi

/*
Filter metodu:
Bir array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak
için kullanılır.
 */


//array filter kullanımı
// 5 harften fazla olanlar??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouser", "Keyboard"];

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) //5 harfden büyük olanları ne bir array'e atadık.

console.log(NEW_PRODUCTS);  

// ******************************************

// aktif kullanıcılar???
const USERS = [
    {fulname: "John Smith", isActive: false},
    {fulname: "Jane Doe", isActive: true},
    {fulname: "Walter White", isActive: true},
    {fulname: "Jesse Pinkman", isActive: false},
]  

const ACTIVE_USERS = USERS.filter(item => item.isActive)//aktif kullanıcıları filter ile yeni bir array'e atadık.

console.log(ACTIVE_USERS);

// *************VİDEO SONRASI NOTLAR********************
console.log("***********VİDEO SONRASI NOTLAR**************")

const person = [
    {
        name: "Adem",
        age: 25,
        languages: ["JavaScript", "CSS"],
    },
    {
        name: "Oğuz",
        age: 33,
        languages: ["Java", "HTML"],
    }
];

const newPerson = person.filter(birey => birey.age > 30 );
const language = person.filter(birey => birey.languages.includes("JavaScript"));
console.log(newPerson);
console.log(language);



