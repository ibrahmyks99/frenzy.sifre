const sifre = require('frenzy.sifre')

const md5 = sifre.md5('Frenzy','hex') // => hex veya base64

/* Çıktı ; 
"011b6e14743b342a0f04a708de1dce7b" */

console.log(md5);