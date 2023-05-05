// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = [];


  passwordSize();
  lowerCase();
  specialCharacters();

  //make an array
  //keep addings specific things until i reach the passwordlength desired
  //concat the array



  var specialCharacter;
  var passwordLength;

  alert(passwordLength);


  /// if (specialCharacter === "true" || specialCharacter === "yes") {


  for (i = 0; i < passwordLength; i++) {

    var randomNumber = Math.floor(Math.random() * 9);
    var text = "!@#$&()\\-`.+,/\"]*$";
    var specialCharactersArray = text.split('');
    var randomSpecial = specialCharactersArray[randomNumber];
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var randomLetter = alphabet[randomNumber];
    var randomThreeNumbers = Math.floor(Math.random() * 3);

    var randomSelectionArray = []
    randomSelectionArray.push(randomNumber, randomLetter, randomSpecial)
    var character = randomSelectionArray[randomThreeNumbers];
    console.log(randomSelectionArray);
    console.log(character);
    password.push(character);





  }
  // password = password.sort((a, b) => 0.5 - Math.random());



  // } else {
  //   for (i = 0; i < passwordLength; i++) {
  //     password.push(randomNumber);

  //   }
  // }






  // Confirms a number in between 8-128 is being selected for the length
  function passwordSize() {
    alert("Please choose criteria for password\nCharacter Length: 8-12 and Character Types");
    passwordLength = prompt("Please enter character length between 8 and 128 characters");

    if (!passwordLength.match("[0-9]")) {
      passwordLength = prompt("Must enter a number");




    } else if (passwordLength < 8) {
      alert("Must be more than 8 characters")
      passwordLength = prompt("Please enter character length between 8 and 128 characters");



    } else if (passwordLength > 128) {
      alert("Must be less than 128 characters")
      passwordLength = prompt("Please enter character length between 8 and 128 characters");


    } else {
      return;


    }
    return;




  }


  // Confirms character types to be included in password
  function lowerCase() {
    var lowerCaseCharacters



    var answer = prompt("Would you like to use lowerCase")
    if (answer == "yes" || answer == "true") {
      lowerCaseCharacters === "true";


    } else if (answer == "no" || answer == "false") {
      lowerCaseCharacters === "false";
    } else {
      alert("Please enter yes/true or no/false")

    }
    return;
  }


  function specialCharacters() {


    var responce = prompt("Would you like to include special characters and numbers")
    var specialCharacter;
    if (responce == "yes" || responce == "true") {
      specialCharacter === "true";


    } else if (responce == "no" || responce == "false") {
      specialCharacter === "false";

    } else {
      responce = prompt("Please enter yes/true or no/false")

    }
    return;













  }


  passwordText.value = password.join('');
  console.log(password);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);