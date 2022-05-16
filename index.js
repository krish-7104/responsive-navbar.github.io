var listUl = document.querySelector("ul");
var menuBtn = document.getElementById("menu");
var cancelBtn = document.getElementById("cancel");
var logoTxt = document.getElementById("logo");
var searchArea = document.getElementById("search");
var navigation = document.querySelector("nav");

function menuOpen() {
  listUl.style.display = "block";
  menuBtn.style.display = "none";
  cancelBtn.style.display = "block";
  logoTxt.style.display = "none";
  navigation.style.position = "fixed";
  searchArea.style.display = "block";
  listUl.appendChild(searchArea);
}
function cancelClose() {
  listUl.style.display = "none";
  menuBtn.style.display = "block";
  cancelBtn.style.display = "none";
  logoTxt.style.display = "block";
}
