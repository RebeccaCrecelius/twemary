/*When someone hovers over the picture, the description text appears. 
When they move away from the picture, the description text disappears

const picture = ['image-one', 'image-two', 'image-three', 'image-four'];

const info = [];

picture.forEach(function(image-container){
	info.push(document.getElementById(description));
})

const infoShow = function(event) {
	event.target.style.display="block";
}

const infoHide = function(event) {
	event.target.style.display='';
}

let eventAssignemnt = fuction(tell) {
	tell.onmouseover = function() {
	infoShow(event);
}
	tell.onmouseout =  function() {
	infoHide(event);
}
};


document.querySelector("html").addEventListener("click", () => {
alert("Hey!);
});
*/

$(document).ready(function () {
    $('.hotspot').click(function () {
        $(this).toggleClass('clicked');
    });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


