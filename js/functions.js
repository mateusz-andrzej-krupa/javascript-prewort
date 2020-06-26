

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function printMessageComp(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messageComp').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('messageComp').innerHTML = '';
}