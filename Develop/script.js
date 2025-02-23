// Assignment code here
function generatePassword() {

    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var numericCharacters = "0123456789";
    var password = "";
    var passwordCreator = "";
    var ensureRequirements = "";
    var index = 0;


    while (true) {
        var passwordLength = prompt("Enter the length of your password. Please enter between 8-128:");
        if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || isNaN(passwordLength)) {
            alert("Please enter a valid number between 8-128")
        }
        else {
            break;

        }
        console.log("Hello, " + passwordLength);

    }

    while (true) {

        var lowerCase = confirm("Do you want lowercase letters?");
        if (lowerCase) {
            passwordCreator = passwordCreator + lowercaseCharacters;
            console.log(passwordCreator);
            index = Math.floor(Math.random() * lowercaseCharacters.length);
            console.log(index)
            ensureRequirements = ensureRequirements + lowercaseCharacters[index];
            passwordLength--;

            console.log(ensureRequirements);

        }
        var upperCase = confirm("Do you want uppercase letters?");

        if (upperCase) {
            passwordCreator = passwordCreator + uppercaseCharacters;
            console.log(passwordCreator);
            index = Math.floor(Math.random() * uppercaseCharacters.length);
            console.log(index)
            ensureRequirements = ensureRequirements + uppercaseCharacters[index];
            passwordLength--;

            console.log(ensureRequirements);

        }

        var numeric = confirm("Do you want numeric?");

        if (numeric) {
            passwordCreator = passwordCreator + numericCharacters;
            console.log(passwordCreator);
            index = Math.floor(Math.random() * numericCharacters.length);
            console.log(index)
            ensureRequirements = ensureRequirements + numericCharacters[index];
            passwordLength--;

            console.log(ensureRequirements);

        }

        var specialCharacter = confirm("Do you want special Characters?");

        if (specialCharacter) {
            passwordCreator = passwordCreator + specialCharacters;
            console.log(passwordCreator);
            index = Math.floor(Math.random() * specialCharacters.length);
            console.log(index)
            ensureRequirements = ensureRequirements + specialCharacters[index];
            passwordLength--;

            console.log(ensureRequirements);

        }


        if (lowerCase || upperCase || numeric || specialCharacter) {

            break;
        }
        else {
            alert("please select at least one of the 4 options");

        }

    }
    password = password + ensureRequirements;
    console.log(passwordCreator);
    for (i=0;i<passwordLength;i++){
        index = Math.floor(Math.random() * passwordCreator.length);
        password = password + passwordCreator[index];
        console.log (password);

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
