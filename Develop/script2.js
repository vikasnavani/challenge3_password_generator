// Assignment code here

function generatePassword() {
  var password = "";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numericalCharacters = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var passwordGatherer = "";
  var ensureRequirements = "";

  while (true) {
    var passwordLength = prompt("Length of password - Please enter a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === null) {
      alert("please enter a valid number between 8 and 128");
    }
    else if (isNaN(passwordLength)) {
      alert("please enter a numeric value")
    }
    else {
      break;
    }
  }
  var upperCase = false;
  var lowerCase = false;
  var numeric = false;
  var special = false;
  var nonSelected = true;
  while (nonSelected) {
    upperCase = confirm("Do you want uppercase letters?");
    if (upperCase) {
      passwordGatherer = passwordGatherer + upperCaseLetters;
      index = Math.floor(Math.random() * upperCaseLetters.length);
    ensureRequirements = ensureRequirements + upperCaseLetters[index];
    passwordLength--;
    }
    lowerCase = confirm("Do you want lowercase letters?");
    if (lowerCase) {
      passwordGatherer = passwordGatherer + lowerCaseLetters;
      index = Math.floor(Math.random() * lowerCaseLetters.length);
      ensureRequirements = ensureRequirements + lowerCaseLetters[index];
      passwordLength--;
    }
    numeric = confirm("Do you want numeric letters?");
    if (numeric) {
      passwordGatherer = passwordGatherer + numericalCharacters;
      index = Math.floor(Math.random() * numericalCharacters.length);
      ensureRequirements = ensureRequirements + numericalCharacters[index];
      passwordLength--;
    }
    special = confirm("Do you want special letters?");
    if (special) {
      passwordGatherer = passwordGatherer + specialCharacters;
      index = Math.floor(Math.random() * specialCharacters.length);
      ensureRequirements = ensureRequirements + specialCharacters[index];
      passwordLength--;
    }
    if (upperCase || lowerCase || numeric || special) {
      nonSelected = false;
    }
    else {
      alert("Please select atleast one option (Uppercase, Lowercase, Numeric, Special");
    }
  }

  console.log(passwordGatherer);
  password = ensureRequirements;
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordGatherer.length);
    password = password + passwordGatherer[index]
    console.log(index)
  }

return password;



}




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
