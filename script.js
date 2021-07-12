var generateBtn = document.querySelector("#generate");
 
let passwordLength  = 0;
let includeUpperrcase = false;
let includeLowercase = false;
let includeSpecial = false;
let includeNum = false;
 
// Users password length
passwordLength = window.prompt("How long would you like to make you password? (8-128)");
while(passwordLength < 8 || passwordLength > 128){
 passwordLength = window.prompt("Password not between 8 and 128 characters. Please enter a new value.");
}
 
// If user wants to use uppercase letters
includeUppercase = window.confirm("Would you like to include uppercase letters?");
 
// If user wants to use lowercase letters
includeLowercase = window.confirm("Would you like to include lower case letters?");
 
// If user wants to use special characters
includeSpecial = window.confirm("Would you like to include special characters?");
 
// If user wants to use numbers
includeNum = window.confirm("Would you like to include numbers?");
 
function generatePassword(passwordLength, includeSpecial, includeLowercase, includeUppercase)
{
 
 let characterOptions = []
 let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let lowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "(", ")", "-", "=", "+"];
 let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 

 if (includeUppercase){
   characterOptions = characterOptions.concat(uppercase);
 }
 if (includeLowercase){
   characterOptions = characterOptions.concat(lowcase);
 }
 if (includeSpecial){
    characterOptions = characterOptions.concat(special);
  }
  if (includeNum){
    characterOptions = characterOptions.concat(num);
}

 //Null
 let password = "";
 for (i = 0; i<passwordLength; i++){
   password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
 }
 return password;
}
 
// Type for Password Input
function writePassword() {
 
 //Checks for parameters that were entered by user will return if none are found
  if (includeSpecial || includeLowercase || includeUppercase  || includeNum) {
    wasAnythingSelected = true;
   }else{
     window.alert("Parameters was not selected. Please select and refresh your page.");
     return;
     getInfo();
   }
  // Generates a password then saves password in variable
 if(wasAnythingSelected){
   var password = generatePassword(passwordLength, includeSpecial, includeLowercase, includeUppercase, includeNum);
   var passwordText = document.querySelector("#password");
 }
 
 
 passwordText.value = password;
 
}
 
// Add Event Listener
generateBtn.addEventListener("click", writePassword);