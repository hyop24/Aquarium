var button = document.querySelector ('button');
var body = document.body;

button.onclick = function changeColor() {
	if (body.style.backgroundColor == 'white') 
	{body.style.backgroundColor = 'pink';}
	 else {
	body.style.backgroundColor = 'white';}
};