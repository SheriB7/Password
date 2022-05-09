// Assignment Code
//this will give result in box for generated password

const resultE1 = document.getElementById("result");
const lengthE1 = document.getElementById("length");
const uppercaseE1 = document.getElementById("uppercase");
const lowercaseE1 = document.getElementById("lowercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateE1 = document.getElementById("generate");
const clipboardE1 = document.getElementById("clipboard");



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol

};

generateE1.addEventListener('click', () => {
  const length = +lengthE1.value;
  const hasLower = lowercaseE1.checked;
  const hasUpper = uppercaseE1.checked;
  const hasNumber = numbersE1.checked;
  const hasSymbol = symbolsE1.checked;

  resultE1.innerText =  generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);

});

function generatePassword(lower, upper, number, symbol, length) {

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log ("typesCount: " , typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return '';
  
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]

      generatedPassword =+ randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

}



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = "!@#$%^&*?+<>=";
  return symbols[Math.floor(Math.random() * symbols.length)];

}
console.log(getRandomSymbol());


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

 // passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);