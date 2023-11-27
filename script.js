// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// REFER TO LINE 57

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//REFER TO LINE 69

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// REFER TO LINE 78

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// REFER TO LINE 114

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// REFER TO LINE 114


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//defines all possible charcter types and every charcter within each type
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numericChars = "0123456789";

  var specialChars = "!@#$%^&*()_-+=";

  //prompts the user to input a length
  var length = prompt("Please enter a length for your password between 8-128 characters:");

  //stores length of password
  length = parseInt(length);

  //insures the inputted character length is between 8 and 128
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Sorry, your chosen password length is either less than 8 chracters or more than 128. Please try again.");
    return "";
  }

  //these variables store a 0 or 1 value depending on if the user confirms or denies each variable type
  var useLowercase = confirm("Include lowercase characters?");

  var useUppercase = confirm("Include uppercase characters?");

  var useNumeric = confirm("Include numeric characters?");

  var useSpecial = confirm("Include special characters?");
  
  //if the user does not allow any types, they will be forced to select atleast one
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  //depending on which character types the user allows, it will add that chacracter type to the userable charcters for the password generator
  var allChars = "";

  //if the user wants lower case (userLowerCase = 1), lower case is a useable charcter type
  if (useLowercase) { 
    allChars += lowercaseChars; 
  }

  if (useUppercase) {
  //if the user wants upper case (uppercaseChars = 1), upper case is a useable charcter type
    allChars += uppercaseChars; 
  }

  if (useNumeric) {
  //if the user wants numbers, numbers are a useable charcter type
    allChars += numericChars; 
  }

  if (useSpecial) {
  //if the user wants special charcters (useNumeric = 1), special charcters are a useable charcter type
    allChars += specialChars; 
  }

  //creates the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  //displays the password generated
  alert("Your secure password is: " + password); 
  return password;
}
