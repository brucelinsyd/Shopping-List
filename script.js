var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

for(i = 0; i < list.length; i++){
	list[i].addEventListener("click", liClick)
}

function liClick () {
	this.classList.toggle("done");
}

function deleteButton(){
	var delBtn = this.parentNode;
		delBtn.remove();
}

function inputLength() {
	return input.value.length;
}

function createListItem() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.innerHTML = "Delete"
	button.addEventListener("click", deleteButton);
	li.addEventListener("click", liClick);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function clickToAddItem() {
	if (inputLength() !== 0) {
	createListItem()
}
}

function keypressToAddItem(event){
	if (inputLength() !== 0 && event.keyCode === 13) {
	createListItem()
}
}

button.addEventListener("click", clickToAddItem)
input.addEventListener("keypress", keypressToAddItem)

