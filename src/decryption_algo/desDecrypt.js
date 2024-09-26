// Define DES key and plaintext
const key = "0123456789abcdef";
const plaintext = "c76b9f95ceb871ed9017479b73bf3cc3";

import CryptoJS from "crypto-js";

function desDecrypt(key, plaintext) {
  // Initialize DES with key
  const parsedKey = CryptoJS.enc.Hex.parse(key);

  // Perform DES encryption
  const encrypted = CryptoJS.DES.encrypt(plaintext, parsedKey, {
    mode: CryptoJS.mode.ECB,
  });

  // Convert ciphertext to hex string
  const ciphertext = encrypted.ciphertext.toString();

  // Parse ciphertext for decryption
  const ciphertextHex = CryptoJS.enc.Hex.parse(plaintext);
  const decrypted = CryptoJS.DES.decrypt(
    { ciphertext: ciphertextHex },
    parsedKey,
    { mode: CryptoJS.mode.ECB }
  );

  // Return decrypted plaintext as UTF-8 string
  const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

  //   console.log("Ciphertext: ", ciphertext);
  console.log("Decrypted: ", decryptedText);

  return decryptedText;
}

console.log(desDecrypt(key, plaintext));

export default desDecrypt;
