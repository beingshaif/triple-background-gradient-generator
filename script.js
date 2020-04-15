var color_1 = document.querySelector(".color_input_1");
var color_2 = document.querySelector(".color_input_2");
var color_3 = document.querySelector(".color_input_3");
var body = document.getElementById("gradient");
var valuer = document.getElementById("color_value");

function set_gradient(){
	console.log("linear-gradient( to right,"+color_1.value+","+color_2.value+","+color_3.value+" ;)");

	body.style.background = "linear-gradient( to right,"+color_1.value+","+color_2.value+","+color_3.value+")";
	valuer.innerHTML = body.style.background+";";
}

color_1.addEventListener("change",set_gradient);
color_2.addEventListener("change",set_gradient);
color_3.addEventListener("change",set_gradient);

set_gradient();