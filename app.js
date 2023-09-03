const copyMaker = document.querySelector(".copy-icon");
const coppiedMessage = document.querySelector(".coppied-message");
const generatedPassword = document.querySelector(".generated");

const rangeInput = document.getElementById("password-length-range");
const lengthNumber = document.querySelector(".length-number");

const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const levelInfo = document.querySelectorAll(".level");

passwordGeneratorBtn = document.querySelector(".generator-btn");

const checkboxes = document.getElementsByName("checker");

const passwordLevel = document.querySelector(".password-level");
console.log(checkboxes);

// connect to eachother range input value and length-number p tag textcontent
rangeInput.addEventListener("input", () => {
  lengthNumber.textContent = rangeInput.value;
});

passwordGeneratorBtn.addEventListener("click", () => {
  //reset
  coppiedMessage.style.display = "none";
  passwordLevel.textContent = "LEVEL";
  levelInfo.forEach((el) => {
    el.style.backgroundColor = "#24232c";
  });

  // after checking we'll collect all chars into charsForPassword binding
  let charsForPassword = [];

  if (uppercaseInput.checked) {
    charsForPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercaseInput.checked) {
    charsForPassword += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numberInput.checked) {
    charsForPassword += "0123456789";
  }
  if (symbolInput.checked) {
    charsForPassword += "!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  }

  // generate random password if password length is greater than 0 and if length equal 0
  //there will be display error message
  let count = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      count += 1;
    }
  }
  if (count > 0) {
    let randomPassowrd = "";

    for (let i = 0; i < rangeInput.value; i++) {
      const randomIndex = Math.floor(Math.random() * charsForPassword.length);
      randomPassowrd += charsForPassword[randomIndex];
    }
    generatedPassword.style.opacity = "1";
    generatedPassword.innerText = randomPassowrd;
  } else {
    generatedPassword.innerText = "Choose characters";
    generatedPassword.style.opacity = "0.5";
  }
  // change levels and colors
  let counter = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      counter += 1;
    }
  }

  if (counter == 1 && rangeInput.value > 0) {
    passwordLevel.textContent = "Too Weak";
    levelInfo[0].style.backgroundColor = "#F64A4A";
  } else if (counter == 2 && rangeInput.value > 0) {
    passwordLevel.textContent = "WEAK";
    levelInfo[0].style.backgroundColor = "#FB7C58";
    levelInfo[1].style.backgroundColor = "#FB7C58";
  } else if (counter == 3 && rangeInput.value > 0) {
    passwordLevel.textContent = "MEDIUM";
    levelInfo[0].style.backgroundColor = "#F8CD65";
    levelInfo[1].style.backgroundColor = "#F8CD65";
    levelInfo[2].style.backgroundColor = "#F8CD65";
  } else if (counter == 4 && rangeInput.value > 0) {
    passwordLevel.textContent = "HARD";
    levelInfo[0].style.backgroundColor = "#A4FFAF";
    levelInfo[1].style.backgroundColor = "#A4FFAF";
    levelInfo[2].style.backgroundColor = "#A4FFAF";
    levelInfo[3].style.backgroundColor = "#A4FFAF";
  }
});
// copy generated password
copyMaker.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedPassword.innerText);
  coppiedMessage.style.display = "block";
});
