var mydata = ["Sagar","Abhishek","Shubh"];

var id=0;

function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

function addEntry() {
    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${getName()}</td>
    </tr>
    `
    id +=1;
    setName("");

    document.getElementById("tbody").innerHTML += snippet;
}

function removeEntry(id) {
    var removeItem = (document.getElementById(id).childNodes[3].innerText);
	document.getElementById(id).remove();
	
	var n=mydata.indexOf(removeItem);
    mydata.splice(n,1);
}

function refreshTable(){
	var html = "";

	mydata.forEach(item => {
		html += `
		<tr id="${id}">
			<td onClick="removeEntry(${id})"}>❌</td>
			<td>${item}</td>
		</tr>
		`
		id++;
	});

	document.getElementById("tbody").innerHTML = html;
}

function getName() {
    return document.getElementById("name").value;
}

function setName(name) {
    return document.getElementById("name").value=name;
}
