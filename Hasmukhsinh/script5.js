
function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addElement();
}

function addElement(){
    var name = document.getElementById("name").value
    var x = entry.length;
    entry[x]=name;

    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${entry[x]}</td>
    </tr>
    `

    id +=1;

    document.getElementById("tbody").innerHTML += snippet;

    setName("");
    }
    

var id=0;
var a = 0;
var entry=["Hasmukh","Vaishal","Rahul"];
function addEntry() {
    
var snippet = "";

    for (var i = 0; i < entry.length; i++) {
         
    snippet += `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${entry[i]}</td>
    </tr>
    `

    id +=1;

    setName("");
   
    }
        document.getElementById("tbody").innerHTML = snippet;

}

function save(){
    localStorage.setItem("userdata",JSON.stringify(entry));
}

function removeEntry(id) {
    var del=(document.getElementById(id).childNodes[3].innerText);
    document.getElementById(id).remove();
    var n=entry.indexOf(del);
    entry.splice(n,1);
}

function getName() {
    return "";
}

function setName(name) {
    return document.getElementById("name").value=name;
}

function reloading(){
    var entries2 = JSON.parse(localStorage.getItem("userdata"))
    
    entry = entries2;
    var snippet = "";

    for (var i = 0; i < entry.length; i++) {
         
    snippet += `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${entry[i]}</td>
    </tr>
    `

    id +=1;

    setName("");
   
    }
        document.getElementById("tbody").innerHTML = snippet;
    


}