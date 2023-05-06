// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = [];
  var specialCharacter;
  var passwordLength;
  var lowerCaseCharacters;
  var numbersAllowed;
  passwordSize();
  lowerCase();
  specialCharacters();
  numbers();
  alert("Password length chosen" + ":" + " " + passwordLength);





  for (i = 0; i < passwordLength; i++) {

    var randomNumber = Math.floor(Math.random() * 9);
    var text = "!@#$&()\\-`.+,/\"]*$";
    var specialCharactersArray = text.split('');
    var randomSpecial = specialCharactersArray[randomNumber];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var randomLetter = alphabet[randomNumber];
    var randomThreeNumbers = Math.floor(Math.random() * 3);
    var randomSelectionArray = []
    var character = randomSelectionArray[randomThreeNumbers];




    if (numbersAllowed === false && lowerCaseCharacters === false && specialCharacter === false) {
      var upperCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';


      upperCaseAlphabet = upperCaseAlphabet.toUpperCase();
      var randomUpperCaseLetter = upperCaseAlphabet[randomNumber]
      randomSelectionArray.push(randomUpperCaseLetter, randomUpperCaseLetter, randomUpperCaseLetter);
      var character = randomSelectionArray[randomThreeNumbers];
      password.push(character);





    } else if (lowerCaseCharacters === true && numbersAllowed === true && specialCharacter === true) {
      randomSelectionArray.push(randomNumber, randomLetter, randomSpecial)
      var character = randomSelectionArray[randomThreeNumbers];
      console.log(randomSelectionArray);
      console.log(character);
      password.push(character);
    } else if (lowerCaseCharacters === false && numbersAllowed === true && specialCharacter === true) {
      var upperCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';


      upperCaseAlphabet = upperCaseAlphabet.toUpperCase();
      var randomUpperCaseLetter = upperCaseAlphabet[randomNumber]
      randomSelectionArray.push(randomUpperCaseLetter, randomNumber, randomSpecial)
      var character = randomSelectionArray[randomThreeNumbers];
      password.push(character);


    }


  }














  // Confirms a number in between 8-128 is being selected for the length
  function passwordSize() {
    alert("Please choose criteria for password\nCharacter Length: 8-12 and Character Types");
    passwordLength = prompt("Please enter character length between 8 and 128 characters");

    if (!passwordLength.match("[0-9]")) {
      passwordLength = prompt("Must enter a number");




    } else if (passwordLength < 8) {
      alert("Must be more than 8 characters")




    } else if (passwordLength > 128) {
      alert("Must be less than 128 characters")


    } else {
      return;


    }
    return;




  }

  function numbers() {

    var responce = prompt("Would you like to include numbers?");
    if (responce == "yes" || responce == "true") {
      numbersAllowed = true;
    } else if (responce == "false" || responce == "no") {
      numbersAllowed = false;
    } else {
      responce = prompt("Please enter yes/true or false/no")
      alert(responce);


    }
  }




  // Confirms character types to be included in password
  function lowerCase() {




    var responce = prompt("Would you like to use lowerCase?")
    if (responce == "yes" || responce == "true") {
      lowerCaseCharacters = true;


    } else if (responce == "no" || responce == "false") {
      lowerCaseCharacters = false;
    } else {
      return;

    }
    return;
  }


  function specialCharacters() {


    var responce = prompt("Would you like to include special characters: '$/?#!@#$'?")

    if (responce == "yes" || responce == "true") {
      specialCharacter = true;


    } else if (responce == "no" || responce == "false") {
      specialCharacter = false;

    } else {

      return;
    }
    return;













  }


  passwordText.value = password.join('');
  console.log(password);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);