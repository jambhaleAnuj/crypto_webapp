// Function to implement Caesar's cipher
function caesarDecrypt(str, shift) {
  var output = "";

  // Loop through each character in the input string
  for (var i = 0; i < str.length; i++) {
    var ascii = str[i].charCodeAt();

    // Check if the character is a letter
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      // Shift the letter by the shift amount
      ascii -= shift;

      // Wrap around for uppercase letters
      if (ascii < 65 && str[i] <= "Z") {
        ascii += 26;
      }
      // Wrap around for lowercase letters
      else if (ascii < 97 && str[i] >= "a") {
        ascii += 26;
      }
    }

    // Add the new character to the output string
    output += String.fromCharCode(ascii);
  }

  // Return the output string
  console.log(output);
  return output;
}

export default caesarDecrypt;
