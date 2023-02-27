let passBox = document.querySelector("#pass-box");
let totalChar = document.querySelector("#total-char");
let upperCase = document.querySelector("#upper-case");
let lowerCase = document.querySelector("#lower-case");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let btn = document.querySelector("#btn");

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatepass = (password = "") => {
  if(upperCase.checked) {
    password += getRandomData(upperSet);
  }
  if(lowerCase.checked) {
    password += getRandomData(lowerSet);
  }
  if(numbers.checked) {
    password += getRandomData(numberSet);
  }
  if(symbols.checked) {
    password += getRandomData(symbolSet);
  }
  if(password.length < totalChar.value) {
    return generatepass(password);
  }
  
  passBox.innerHTML = stringTrim(password, totalChar.value);
}

generatepass();

btn.addEventListener('click', function() {
  generatepass();
});

function stringTrim(str, num) {
  if(str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}