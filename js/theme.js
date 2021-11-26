"use strict";
const bodyClass = document.getElementsByTagName("body");
const logo = document.querySelector(".header__logo");
const theme = document.querySelector(".header__theme");
const optionsTheme = document.querySelector(".header__options");
const formTheme = document.querySelector(".header__form");
const display = document.querySelector(".display");
const keyboard = document.querySelector(".keyboard");
const buttonReset = document.querySelectorAll(".keyboard__key-button-blue");
const normalKey = document.querySelector(".keyboard__key-button");
const themeOne = document.querySelector(".header__checkbox-1");
const themeTwo = document.querySelector(".header__checkbox-2");
const themeThree = document.querySelector(".header__checkbox-3");

themeTwo.addEventListener("click", function () {
  document.body.style.backgroundColor = "var(--light-grey)";
  logo.style.color = "var(--black)";
  theme.style.color = "var(--black)";
  optionsTheme.style.backgroundColor = "var(--grey-red)";
  formTheme.style.color = "var(--black)";
  display.style.color = "var(--black)";
  display.style.backgroundColor = "var(--very-light-gray)";
  keyboard.style.backgroundColor = "var(--grey-red)";
  buttonReset.forEach((i) => {
    i.style.backgroundColor = "var(--dark-moderate-cyan)";
    i.style.boxShadow = "0px 5px 0px 0px var(--dark-light-cyan)";
  });
});

themeOne.addEventListener("click", function () {
  document.body.style.backgroundColor = "var(--dark-blue1)";
  logo.style.color = "var(--white)";
  theme.style.color = "var(--white)";
  optionsTheme.style.backgroundColor = "var(--dark-blue3)";
  formTheme.style.color = "var(--white)";
  display.style.color = "var(--white)";
  display.style.backgroundColor = "var(--dark-blue3)";
  keyboard.style.backgroundColor = "var(--dark-blue2)";
  normalKey.forEach((i) => {
    i.style.backgroundColor = "var(--orange-gray1)";
    i.style.boxShadow = "0px 5px 0px 0px #b4a497)";
  });
  buttonReset.forEach((i) => {
    i.style.backgroundColor = "var(--dark-blue-key)";
    i.style.boxShadow = "0px 5px 0px 0px var(--dark-blue-key-shadow)";
  });
});

themeThree.addEventListener("click", function () {
  document.body.style.backgroundColor = "var(--very-dark-violet)";
  logo.style.color = "var(--yellow)";
  theme.style.color = "var(--yellow)";
  optionsTheme.style.backgroundColor = "var(--soft-violet)";
  formTheme.style.color = "var(--yellow)";
  display.style.color = "var(--yellow)";
  display.style.backgroundColor = "var(--soft-violet)";
  keyboard.style.backgroundColor = "var(--soft-violet)";
  normalKey.forEach((i) => {
    i.style.backgroundColor = "var(--violet-dark)";
    i.style.boxShadow = "0px 5px 0px 0px #b4a497)";
  });
  buttonReset.forEach((i) => {
    i.style.backgroundColor = "var(--pure-cyan)";
    i.style.boxShadow = "0px 5px 0px 0px var(--soft-cyan)";
  });
});
