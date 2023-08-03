// FOR DONGUSU

//for ([baslangıcAtaması]; [kosulIfadesi]; [arttırımIfadesi]) {
//   yapılacak islem
//       }


// 10'a kadar sıralarız.
// for (let index = 0; index <= 10; index++) {
//     console.log(index)
// }




 //dışardan tanımla ile de baslangıc ataması yapabiliriz.
// let index = 0;

// for(;index <= 10; index++) {
//     console.log(index)
//     }


const userListDOM = document.querySelector('#userList');


let index = 0;



for (; index < 10; index++) {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = index
    userListDOM.appendChild(liDOM)
}


let users = ["Lorem", "Ipsum", "Dolor",]

let loremDOM = document.querySelector('#lorem');

for (let index = 0; index < users.length; index++) {
    liDOM = document.createElement('li');
    liDOM.innerHTML = users[index]//user'ın index'lerini döneriz.
    loremDOM.appendChild(liDOM)//üst ul elementine li elementi bu şekilde eklememiz gerekli.!!!
}



//VİDEO SONRASI NOTLAR

for(let i = 1; i < 5;i++) {
    console.log(i)
}
// İlk olarak değeri 1 olan i adında bir değişken tanımladık.
// Daha sonra bu i değişkeninin 5 sayısından küçük olduğu sürece döngü içerisine girip çalışmasını istedik.
// Son olarak eğer koşulu sağlıyor ise ++ ifadesini kullanarak değerinin birer birer artmasını istedim.

//örnek
for(let i = 10; i >= 0; i--) {
    console.log(i)
    }

//örnek
for(let i = 20; i <= 40; i++) {
    console.log(i)
    }

//örnek 0 ve 50 arası çift sayılar
for(let i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log("sadece çift sayılar:" ,i)
    };
};

for(let i = 0; i <= 50; i++) {
    if(i % 2 !==0) {
        console.log("sadece tek sayılar:" ,i)
    }
};