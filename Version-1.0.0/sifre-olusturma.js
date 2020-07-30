const sifre = require('frenzy.sifre') //Modülümüzü tanımladık.

//Şifremizi belirttik
const şifre = sifre({ //Ayarlarımızı yaptık.
uzunluk : 14,
rakam : true,
büyükharf: true,
küçükharf: false
})

/* Örnek Çıktı ; 
"78FANR85EZRDTP" */

console.log(şifre);//Çıktıyı aldık.