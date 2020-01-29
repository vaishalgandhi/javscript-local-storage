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

	var text = "<tr><td><button class=\"btn-danger\" onclick=\"deleteRecord(this)\">Delete</button></td><td>"+ first +"</td><td>"+ last +"</td><td>"+ age +"</td></tr>";

	fetchElement("table-body").innerHTML += text;

	fetchElement("first").value = "";
	fetchElement("last").value = "";
	fetchElement("age").value = "";

	return true;
}

function deleteRecord(element) {
	var row = element.parentElement.parentElement.remove();
}