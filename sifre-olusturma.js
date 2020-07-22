const sifre = require('frenzy.sifre')

const şifre = sifre({
uzunluk : 14,
rakam : true,
büyükharf: true,
küçükharf: false
})

/* Örnek Çıktı ; 
"78FANR85EZRDTP" */

console.log(şifre);
