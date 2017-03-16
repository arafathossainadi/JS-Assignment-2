var color_td;
document.write("<table style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%); border:1px solid black;'>");

for(var i = 1; i < 10; i++) {

	document.write("<tr style='height:100px;text-align:center;'>");

	for(var j = 1; j < 10; j++) {

		if(j == 1 || i == 1) {
			color_td = "#ff6a00";
		}
		else {
			color_td = "#5fb73a";
		}

		document.write("<td style='width:100px;font-size:50px;border:1px solid black;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");