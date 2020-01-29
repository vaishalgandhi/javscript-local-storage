var rowId = 3;

var entries = [
	{id: 1, "first": "Vaishal", "last": "Gandhi", "age": 21},
	{id: 2, "first": "Rahul", "last": "Nagpal", "age": 24},
	{id: 3, "first": "Hasmukh", "last": "Solanki", "age": 25},
];

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

	entries.push({id: rowId, "first": first, "last": last, "age": age});

	fetchElement("first").value = "";
	fetchElement("last").value = "";
	fetchElement("age").value = "";

	return true;
}

function deleteRecord(id) {
	document.getElementById("entry-"+id).remove();

	entries = entries.filter(function( object ) {
		return object.id !== id;
	});
}

function refreshTable() {
	var text = "";
	
	entries.forEach(item => {
		text += "<tr id=entry-"+ item.id +"><td><button class=\"btn-danger\" onclick=\"deleteRecord("+item.id+")\">Delete</button></td><td>"+ item.first +"</td><td>"+ item.last +"</td><td>"+ item.age +"</td></tr>";
	});

	fetchElement("table-body").innerHTML = text;
}