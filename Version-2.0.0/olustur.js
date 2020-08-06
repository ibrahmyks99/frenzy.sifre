const sifre = require('frenzy.sifre')

const şifre = sifre.oluştur({
uzunluk : 14,
rakam : true,
büyükharf: true,
küçükharf: false
})

/* Çıktı ; 
"78FANR85EZRDTP" */

console.log(şifre);