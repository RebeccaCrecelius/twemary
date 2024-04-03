/*When someone hovers over the picture, the description text appears. 
When they move away from the picture, the description text disapperas.*/

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
	

