function showText(){
	var hidden=document.getElementById("hidden");
	var ReadMore=document.getElementById("ReadMore");
	var dots=document.getElementById("threeDots");

	if(dots.style.display === "none"){
		dots.style.display= "inline";
		ReadMore.innerHTML = "Read More"
		hidden.style.display= "none";
	}

	else{
		dots.style.display= "none";
		ReadMore.innerHTML = "Read Less"
		hidden.style.display= "inline";
	}
}