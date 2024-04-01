
let hideOne = document.getElementById("textOne");
let hideTwo = document.getElementById("textTwo");
let hideThree = document.getElementById("textThree");
let hideFour = document.getElementById("textFour");

hideOne.hidden = true;
hideTwo.hidden = true;
hideThree.hidden = true;
hideFour.hidden = true;

hideOne.onmousehover = function() {
	hideOne.hidden = false;
}