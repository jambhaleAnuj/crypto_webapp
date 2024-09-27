import cryptoJs from "crypto-js";
function hmac_crypt(message, secret) {
  var newHmac = cryptoJs.HmacSHA256(message, secret);
  var hashInBase64 = cryptoJs.enc.Base64.stringify(newHmac);
  return hashInBase64;
}

export default hmac_crypt;
