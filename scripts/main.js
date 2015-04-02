var mouseoverSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].getAttribute("fill");
	obj.getElementsByTagName("path")[0].setAttribute("fill", "#ffffff");
	obj.style.backgroundColor = currentColor;
}

var resetSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].getAttribute("fill");
	obj.getElementsByTagName("path")[0].setAttribute("fill", obj.style.backgroundColor);
	obj.style.backgroundColor = currentColor;
}