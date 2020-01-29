var rowId = 0;

function fetchElement(id) {
	return document.getElementById(id);
}

function addRecord() {
	var first = fetchElement("first").value,
		last = fetchElement("last").value,
		age = fetchElement("age").value;

	if(first === "" || first === " ") {
		alert("Please enter first name");
		return;
	}

	if(last === "" || last === " ") {
		alert("Please enter last name");
		return;
	}

	if(age === "" || age === " ") {
		alert("Please enter age name");
		return;
	}

	if (age <= 0 || age >=100) {
		alert("Please provide valid age");
		return;
	}

	rowId++;

	var text = "<tr id=entry-"+rowId+"><td><button class=\"btn-danger\" onclick=\"deleteRecord("+rowId+")\">Delete</button></td><td>"+ first +"</td><td>"+ last +"</td><td>"+ age +"</td></tr>";

	fetchElement("table-body").innerHTML += text;

	fetchElement("first").value = "";
	fetchElement("last").value = "";
	fetchElement("age").value = "";

	return true;
}

function deleteRecord(id) {
	document.getElementById("entry-"+id).remove();
}