// ForEach ile Array içerisindeki Öğelerin Çağrılması


/*
JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

örn:
arr.forEach(function(value,index,array) {
    index ve array kullanmak opsiyoneldir.!!!!
}
*/

const PRODUCTS = ["laptop", "phone", "speakeer", "desktop", "server", "mouse", "keyboard"]

PRODUCTS.forEach(product => console.log(product));//tek tek tüm değerleri yazdırır.
PRODUCTS.forEach((product,index) => console.log(product,index));//tek tek tüm değerleri ve indexleri yazdırır.


PRODUCTS.forEach((product,index,array) => array[index] += " 111");//array[index] ile yine değerleri tek tek yazdırır.
console.log("********************")
console.log(PRODUCTS)//yukarıda eklediğimiz 111 değeri array öğelerinin yanlarına eklenir. değer güncellenir.
console.log("********************")
PRODUCTS.forEach((product,index,array) => array[index] = `${product.toUpperCase()}`) // her birisini büyük harf yaparız.
console.log(PRODUCTS)
console.log("********************")
// **************************************************************

/*
FOR İLE ÖRNEK
const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li)
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)  
}
*/
//FOREACH İLE AYNI ÖRNEK KARŞILAŞTIRMA
const userListDOM = document.querySelector('#userList')
PRODUCTS.forEach(item => {
    const liDOM = document.createElement('li')  
    liDOM.innerHTML = item
    userListDOM.appendChild(liDOM)  
})
console.log('*******VİDEO SONRASI NOTLAR****************')

//VİDEO SONRASI NOTLAR
// Konuyu daha iyi anlamak için her parametrenin aldığı değeri gösteren bir örnek yapalım.
const animals = ["cat", "dog", "bird", "horse"];

animals.forEach((value, index, array)=> {
console.log('value: ' + value);
console.log('value parametresinin aldığı index:' + index);
console.log('array: ' + array);//arrayi 4 kere bastırır. çünkü 4 değer vardır.
});

// *************************************************
console.log('************************************************')
//Aynı fonksiyonu her zaman kullanmak zorunda olduğumuz index parametresiyle yazalım.
animals.forEach(animal => console.log(animal));// her bir değeri tek tek yazdırır.
console.log('************************************************');

//****************************************************
//Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.
const numbers = [4, 11, 9];
const newArray = [];//boş bir array.

numbers.forEach(function(numbers){
    newArray.push(numbers * 2); //numbers array'inin değerlerini 2 ile çarpar ve newArray'e atar.
});
console.log(newArray);//[8, 22, 18]
console.log ('********************************');

//****************************************************  
//Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

const numberss = [12, 24, 36];
const newArray2 = [];

numberss.forEach((numberss)=> newArray2.push(numberss * 2));//numberss array'inin değerlerini 2 ile çarpıp newArray2'e ekledik.
console.log (newArray2);