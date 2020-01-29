var mydata = ["Sagar","Abhishek","Shubh"];

var id=0;

function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

function addEntry() {
	var name = getName();
    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${name}</td>
    </tr>
    `
    id +=1;
    setName("");

    document.getElementById("tbody").innerHTML += snippet;

	var storageData = JSON.parse(localStorage.getItem("userdata"));
	storageData.push(name);
	if (typeof(Storage) !== "undefined"){
		localStorage.setItem("userdata",JSON.stringify(storageData));
	}
}

function saveTable(){
	if (typeof(Storage) !== "undefined"){
		localStorage.setItem("userdata",JSON.stringify(mydata));
	}
}

function removeEntry(id) {
    var removeItem = (document.getElementById(id).childNodes[3].innerText);
	document.getElementById(id).remove();
	
	var n=mydata.indexOf(removeItem);
    mydata.splice(n,1);
}

function refreshTable(){
	var storageData = JSON.parse(localStorage.getItem("userdata"));
	var html = "";

	for (var i = 0; i < storageData.length; i++) {
		html += `
		<tr id="${id}">
			<td onClick="removeEntry(${id})"}>❌</td>
			<td>${storageData[i]}</td>
		</tr>
		`
		id++;
	}

	document.getElementById("tbody").innerHTML = html;
}

function getName() {
    return document.getElementById("name").value;
}

function setName(name) {

    return document.getElementById("name").value=name;
}
