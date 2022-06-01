function ValidateForm(){
	var name=document.getElementById("name").value;
	var address=document.getElementById("address").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var feedback=document.getElementById("feedback").value;

	if(name=="" || address=="" || email=="" || phone=="" || feedback=="" ){
		alert("You should filled all the block mentioned below.")
		return false;
	}
	
	else{
		alert("Your form has been send to me. Thank you for visiting my website.")
		return true;
	}
}
		