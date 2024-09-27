import cryptoJs from "crypto-js";

var hash = cryptoJs.MD5("hello");
var hashInBase64 = cryptoJs.enc.Base64.stringify(hash);
console.log(hash);
console.log(hashInBase64);
