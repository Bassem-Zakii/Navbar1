"use strict";

const navBtn = document.querySelector("header nav .navbtn");
const navList = document.querySelector("header nav ul");
let navLinks = document.querySelectorAll("header nav ul a");

// navbar active links

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// toggle navbar button

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
  }
});
