var flag = 0;
var lag2 = 1;

function myFunction() {
	flag = "Hello";
	alert("Hello World!");
	var x = document.getElementById("demo");
	if(flag == 0) {
		x.style.fontSize = "25px";
		x.style.color = "red";
		flag = 1;
	} else {
		/*
		flag = 0;
		x.style.fontSize = "18px";//"16px";
		x.style.color = "black";
		*/
	}
}