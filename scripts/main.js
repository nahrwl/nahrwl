var mouseoverSocialIcon = function(obj) {
	var doc = obj.getElementsByTagName("object")[0].getSVGDocument();

	var things = doc.getElementsByTagName("path");
	var currentColor = things[0].style.fill;
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].style.fill = "#FFFFFF";
	};
	obj.style.backgroundColor = currentColor;
}

var resetSocialIcon = function(obj) {
	var doc = obj.getElementsByTagName("object")[0].getSVGDocument();

	var things = doc.getElementsByTagName("path");
	var currentColor = things[0].style.fill;
	for (var i = things.length - 1; i >= 0; i--) {
		things[i].style.fill = obj.style.backgroundColor;
	};
	obj.style.backgroundColor = currentColor;
}


