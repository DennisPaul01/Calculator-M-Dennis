"use strict";

// SELECTORS
const outputResult = document.querySelector(".display__numbers");
const delKey = document.querySelector(".keyboard_key-del");
const keyboardNumber = document.querySelectorAll(".keyboard__key-button");

let arrayNumber = [];
let arrayTotal = [];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
let operator = "";
let actual = 0;
let final = 0;
const addNumber = (number) => {
  if (number === "." && arrayNumber.some((element) => element === ".")) {
    outputResult.textContent = arrayNumber.join("");
  } else {
    arrayNumber.push(number);
    outputResult.textContent = arrayNumber.join("");
  }
};

const deleteNr = () => {
  arrayNumber.pop();
  arrayNumber.length > 0
    ? (outputResult.textContent = arrayNumber.join(""))
    : (outputResult.textContent = "0.00");
};

const operatorsFunctions = (operatorInput) => {
  if (arrayTotal > 0) equal();
  arrayTotal.push(Number(arrayNumber.join("")));
  arrayNumber = [];
  actual = arrayTotal[0];
  outputResult.textContent = actual;
  operator = operatorInput;
  console.log(arrayTotal, arrayNumber);
  if (arrayTotal.length > 1) {
    if (operator === "+") actual = arrayTotal[0] - arrayTotal[1];
    if (operator === "-") actual = arrayTotal[0] - arrayTotal[1];
    if (operator === "*") actual = arrayTotal[0] - arrayTotal[1];
    if (operator === "/") actual = arrayTotal[0] - arrayTotal[1];
    arrayTotal = [];
    arrayNumber = [];
    arrayTotal.push(actual);
    outputResult.textContent = actual;
    operator = operatorInput;
  }
};

const reset = () => {
  arrayTotal = [];
  arrayNumber = [];
  outputResult.textContent = "0.00";
  actual = 0;
  operator = "";
};

const equal = () => {
  if (operator === "+") actual = arrayTotal[0] + Number(arrayNumber.join(""));
  if (operator === "-") actual = arrayTotal[0] - Number(arrayNumber.join(""));
  if (operator === "*") actual = arrayTotal[0] * Number(arrayNumber.join(""));
  if (operator === "/") actual = arrayTotal[0] / Number(arrayNumber.join(""));
  arrayNumber = [];
  arrayTotal = [];
  operator = " ";
  arrayTotal.push(actual);
  console.log(arrayTotal);
  outputResult.textContent = actual;
};

for (let key of keyboardNumber) {
  key.addEventListener("click", function () {
    let valueKey = key.value;
    if (numbers.some((nr) => nr == valueKey)) addNumber(valueKey);
    if (valueKey === "del" && arrayNumber.length > 0) deleteNr();
    if (valueKey === "+") operatorsFunctions(valueKey);
    if (valueKey === "-") operatorsFunctions(valueKey);
    if (valueKey === "*") operatorsFunctions(valueKey);
    if (valueKey === "/") operatorsFunctions(valueKey);
    if (valueKey === "Reset") reset();
    if (valueKey === "=") equal();
  });
}

//
// -adaug numbar
// -apas operator
//
