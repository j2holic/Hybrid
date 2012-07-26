var GUGUDAN = {
	gugudan : function() {
		var allTag = "";
		for ( var i = 2; i <= 9; i++) {
			allTag = allTag + this.printDan(i);
		}
		// document.write(allTag);
		var result = document.getElementById("result");
		result.innerHTML = allTag;
	},

	printDan : function(i) {
		var htmlTag = "";
		for ( var j = 1; j <= 9; j++) {
			htmlTag = htmlTag + ("<li>" + i + " * " + j + " = " + i * j + "</li>");
		}
		htmlTag += ("<br>");
		return htmlTag;
	}
};
