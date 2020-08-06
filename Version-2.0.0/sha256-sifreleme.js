const sifre = require('frenzy.sifre')

const sha256 = sifre.sha256('Frenzy','hex') // => hex veya base64

/* Çıktı ; 
"148b8f01ccb30c07d3bd3fb26370f7976cdc4a08a1e1d2c6be996306d8cc274e" */

console.log(sha256);