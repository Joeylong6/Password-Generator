// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomPasswordgenerate = "";

var lowerCaseChars = "abcdefgijkmnopqrstwxyz";
var upperCaseChars = "ABCDEFGHJKLMNPQRSTWXYZ";
var numChars = "0123456789";
var specialChars = "*$-+?_&=!%{}/";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// me: prompting user for password values and assigning them to a variable 
function generatePassword() {

  var passwordChars ="";

  var PasswordLength = parseInt(prompt("Password length: Enter a number between 8 and 128"));

    if (PasswordLength <8) {
    alert ("your password must be between 8 and 128 character")
}
    if (passwordLength >128) {
    alert ("your password must be between 8 and 128 character")
}

    if (PasswordLength >=8) {

  var lowerCaseCharsChoice = confirm("Would you like to include lowercase letters ?")
    if (lowerCaseCharsChoice==true) {
      passwordChars+=lowerCaseChars;
}
  var upperCaseCharsChoice = confirm("Would you like to include Uppercase letters ?")
    if (upperCaseCharsChoice==true) {
  passwordChars+=upperCaseChars;
}
  var numCharsChoice = confirm("Would you like to include numbers ?")
    if (numCharsChoice ==true) {
      passwordChars+=numChars;
}

  var specialCharsChoice = confirm ("Do you also want to include special characters ?")
    if (specialCharsChoice == true) {
      passwordChars+=specialChars;
}

    if (!lowerCaseCharsChoice && !upperCaseCharsChoice && !numCharsChoice && !specialCharsChoice) {
      alert ("You must at least use one character type in your password")
  
  var lowerCaseCharsChoice = confirm("Would you like to include lowercase letters ?")
    if (lowerCaseCharsChoice==true) {
      passwordChars+=lowerCaseChars;
  }

  var upperCaseCharsChoice = confirm("Would you like to include Uppercase letters ?")
    if (upperCaseCharsChoice==true) {
      passwordChars+=upperCaseChars;
  }

  var numCharsChoice = confirm("Would you like to include numbers ?")
    if (numCharsChoice ==true) {
    passwordChars+=numChars;
  }

  var specialCharsChoice = confirm ("Do you also want to include special characters ?")
    if (specialCharsChoice == true) {
      passwordChars+=specialChars;
  }
  
  }
  
  for (var i = 0; i < PasswordLength; i++) {
    
    randomPasswordGenerate += passwordChars[Math.floor(Math.random() * passwordChars.length)]
  }
  return randomPasswordGenerate;


 

    }
     
    


















