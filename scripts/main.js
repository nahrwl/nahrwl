var mouseoverSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].style.fill;
	var things = obj.getElementsByTagName("path");
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].style.fill = "#FFFFFF";
	};
	obj.style.backgroundColor = currentColor;
}

var resetSocialIcon = function(obj) {
	var currentColor = obj.getElementsByTagName("path")[0].style.fill;
	var things = obj.getElementsByTagName("path");
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].style.fill = obj.style.backgroundColor;
	};
	obj.style.backgroundColor = currentColor;
}