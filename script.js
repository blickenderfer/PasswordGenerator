var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var possibleCharacters = []
var minPasswordLength = 8;
var maxPasswordLength = 128;
var pool = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordOptions(){
  var passwordLength = prompt("How many characters would you like?")
  var hasLowercase = confirm("Lowercase?")
  var hasUppercase = confirm("Uppercase?")
  var hasNumbers = confirm("Numbers?")
  var hasSpecialCharacters = confirm("Special characters?")

  if(passwordLength < minPasswordLength || possibleCharacters > maxPasswordLength){
    alert("Password must be between 8 and 128 characters.")
    return null;
  }

  if(hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecialCharacters === false){
    alert("At least one category of characters must be chosen.")
    return null;
  }

  // pool = { 
  //   passwordLength: passwordLength, 
  //   hasLowercase: hasLowercase,
  //   hasUppercase: hasUppercase,
  //   hasNumbers: hasNumbers,
  //   hasSpecialCharacters: hasSpecialCharacters, 
  // }

  if(hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }

  if(hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }

  if(hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  if(hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  for(var i = 0; i < passwordLength; i++){
    pool+= possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

  return pool; 
}



function generatePassword() {
  var pool = passwordOptions()
  console.log(pool); 
  return pool;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
