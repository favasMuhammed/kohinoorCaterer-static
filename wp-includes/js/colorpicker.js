d><td colspan='"+width2+"' style='text-align: center;' id='colorPickerSelectedColorValue'>#FFFFFF</td></tr>";
		}
	cp_contents += "</table>";
	if (windowMode) {
		cp_contents += "</span></body></html>";
		}
	// end populate code

	// Write the contents to the popup object
	cp.populate(cp_contents+"\n");
	// Move the table down a bit so you can see it
	cp.offsetY = 25;
	cp.autoHide();
	return cp;
	}
