const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  checkIsNumberLucky(sum, numberToCheck);
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`Your birthday is a lucky number!! 🥳 🥳 🥳 `);
  }
  else{
  showMessage(`Your birthday is not so lucky 😕`);
  }
};

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    calculateSum(date);
  } else {
    showMessage("Please enter both the fields");
  }
});