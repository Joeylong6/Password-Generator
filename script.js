// Assignment Code
var generateBtn = document.querySelector("#generate");


var randomPasswordGenerate = "";
var lowerCaseCharsChoice = "";
var upperCaseCharsChoice = "";
var numCharsChoice = "";
var passwordChars = "";
var passwordChars= "";
var passwordLength= "";
var password="";
var passwordText="";


var upperCaseChars = "ABCDEFGHJKLMNPQRSTWXYZ";
var lowerCaseChars = "abcdefgijkmnopqrstwxyz";
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
 
  passwordLength = parseInt(prompt("Password length: Enter a number between 8 and 128"));

    if (passwordLength <8) {
    alert ("your password must be between 8 and 128 character");
    passwordLength = parseInt(prompt("Password length: Enter a number between 8 and 128"));
}

    if (passwordLength >128) {
    alert ("your password must be between 8 and 128 character");
    passwordLength = parseInt(prompt("Password length: Enter a number between 8 and 128"));
}

    if (passwordLength >=8) {
      getCharsForPassword ()
      // me: for loop to generate random password 
      for (var i = 0; i < passwordLength; i++) {
    
        randomPasswordGenerate += passwordChars[Math.floor(Math.random() * passwordChars.length)]
      }
      return randomPasswordGenerate // me: returning this value and assigning it to var password 
}
}
  

  //me: function to determine which character types the user wants to include in his password 
function getCharsForPassword () {
  var lowerCaseCharsChoice = confirm("Would you like to include lowercase letters ?");
    if (lowerCaseCharsChoice==true) {
      passwordChars+=lowerCaseChars;
}

  var upperCaseCharsChoice = confirm("Would you like to include Uppercase letters ?");
    if (upperCaseCharsChoice==true) {
      passwordChars+=upperCaseChars;
}

  var numCharsChoice = confirm("Would you like to include numbers ?");
    if (numCharsChoice ==true) {
      passwordChars+=numChars;
}

  var specialCharsChoice = confirm ("Do you also want to include special characters ?");
    if (specialCharsChoice ==true) { 
      passwordChars+=specialChars;
}
// me: valitdating my users input to make sure one of the character types has been chosen 
if(lowerCaseCharsChoice || upperCaseCharsChoice || numCharsChoice || specialCharsChoice ){
 return passwordChars
}

 else {
  alert("There needs to be at least one character type in your password");
  getCharsForPassword()
}
  
}

    
    
     


  