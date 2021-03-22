// Assignment Code
var generateBtn = document.querySelector("#generate");


var randomPasswordGenerate = "";
var lowerCaseCharsChoice = "";
var upperCaseCharsChoice = "";
var numCharsChoice = "";
var passwordChars = "";
var passwordChars= "";
var passwordLength= "";


var upperCaseChars = "ABCDEFGHJKLMNPQRSTWXYZ";
var lowerCaseChars = "abcdefgijkmnopqrstwxyz";
var numChars = "0123456789";
var specialChars = "*$-+?_&=!%{}/";

//me: function to determine which character types the user wants to include in his password
function getCharsforPassword () {
  var lowerCaseCharsChoice = confirm("Would you like to include lowercase letters ?") ;
    if (lowerCaseCharsChoice==true) {
      passwordChars+=lowerCaseChars;
}

  var upperCaseCharsChoice = confirm("Would you like to include Uppercase letters ?") ;
    if (upperCaseCharsChoice==true) {
      passwordChars+=upperCaseChars;
}


  var numCharsChoice = confirm("Would you like to include numbers ?") ;
    if (numCharsChoice ==true) {
      passwordChars+=numChars;
}

  var specialCharsChoice = confirm ("Do you also want to include special characters ?") ;
    if (specialCharsChoice ==true) { 
      passwordChars+=specialChars;
}
  return passwordChars
      }

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
    alert ("your password must be between 8 and 128 character") ;
}

    if (passwordLength >128) {
    alert ("your password must be between 8 and 128 character") ;
}

    if (passwordLength >=8) {

      getCharsForPassword ()
      

    }
  // me: for loop to determine whether the user has entered at least one character type and if not then he will be asked the questions again 
    // if (lowerCaseCharsChoice==false && upperCaseCharsChoice==false && !numCharsChoice==false) {
    //   alert ("You must at least use one character type in your password") ;

    //   getCharsforPassword () ;
}
  // me: for loop to generate random password 

  for (var i = 0; i < passwordLength; i++) {
    
    randomPasswordGenerate += passwordChars[Math.floor(Math.random() * passwordChars.length)]
  }
  // return randomPasswordGenerate;
    
    
     

// me: function to input user's choices into a variable called passwordChars and return the result which will then be used in the for loop

  