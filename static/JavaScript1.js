function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.className.split(" ")[1]);
	ev.target.className = ev.target.className.split(" ")[0];
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	ev.target.className = ev.target.className.split(" ")[0];
	ev.target.className += " " + data;
}
   

//WORST CASE: use JVS to invoke PHP to use SQL