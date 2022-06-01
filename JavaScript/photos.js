var i=0;
var image=["image/sketch_1.jpg","image/sketch_2.jpg","image/sketch_3.jpg","image/sketch_4.jpg","image/sketch_5.jpg","image/sketch_6.jpg","image/sketch_7.jpg","image/sketch_8.jpg",];
function slideShow(){
	var showcase= document.getElementById("img2");
	showcase.src= image[i];
	if(i<6){
		i++;
	}
	else{
		i=0;
	}
	setTimeout("slideShow()",3000);
}
window.onload= function(){slideShow()};