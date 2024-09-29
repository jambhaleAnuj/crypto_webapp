// Function to implement Caesar's cipher
function caesarCipher(str, shift) {
  let output = "";

  // Normalize the shift to be within 0-25
  shift = shift % 26;

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (ascii >= 65 && ascii <= 90) {
      ascii = ((ascii - 65 + shift) % 26) + 65; // Adjust for uppercase letters
    }
    // Check if the character is a lowercase letter
    else if (ascii >= 97 && ascii <= 122) {
      ascii = ((ascii - 97 + shift) % 26) + 97; // Adjust for lowercase letters
    }

    // Add the new character to the output string
    output += String.fromCharCode(ascii);
  }

  // Return the output string
  return output;
}

export default caesarCipher;
