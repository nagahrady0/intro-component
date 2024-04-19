let btn =document.querySelector("button");
let errorsNodes = document.querySelectorAll(".error-message");
let errors = Array.from(errorsNodes);
const emailRegex = /[A-Za-z0-9._%+-]+@gmail.com/;

btn.onclick =(e)=>{
e.preventDefault();


	errors.map((el)=>{
	
		el.parentNode.children[1].style.display = "none";

		if(el.parentNode.children[0].value ==""){
		el.parentNode.children[1].style.display = "block";
		}


		if(!(el.parentNode.children[0].value.match(emailRegex)) &&el.parentNode.children[0].getAttribute("id") == "email"){
		el.parentNode.children[1].style.display = "block";
		}
	


	})







}
