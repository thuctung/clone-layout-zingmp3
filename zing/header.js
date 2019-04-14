var tunr = document.getElementById('turnon');
var bat= document.getElementById('div_togle');
var txtSing = document.getElementById('txtSing');
var clear = document.getElementById('clear');

tunr.onclick = function () {
	// body...
	bat.classList.toggle('turnoff');
}

clear.onclick = function () {
	// body...
	txtSing.value = '';
}