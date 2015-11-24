var button = document.getElementById("button");
var block = document.getElementById("block");
button.addEventListener("click",function() { 

	if(block.className==="grey"){
		 block.innerHTML = "stop";
		 block.className = "red";
		 button.innerHTML = "Make green";
}

      else if(block.className==="green"){
       	        block.innerHTML = "stop";
		        block.className = "red";
		        button.innerHTML = "Make green";
}  

     else  { 
     	  block.className==="grey";
		   block.innerHTML = "go";
		    block.className = "green";
		     button.innerHTML = "Make red";
	 
}
  

});
	