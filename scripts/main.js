var mouseoverSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].getAttribute("fill");
	var things = obj.getElementsByTagName("path");
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].setAttribute("fill", "#FFFFFF");
	};
	obj.style.backgroundColor = currentColor;
}

var resetSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].getAttribute("fill");
	var things = obj.getElementsByTagName("path");
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].setAttribute("fill", obj.style.backgroundColor);
	};
	obj.style.backgroundColor = currentColor;
}