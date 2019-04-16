var divPicture = document.getElementById('div-picture');

var btnPicture1 = document.getElementById('anh1');

var btnPicture2 = document.getElementById('anh2');

var btnPicture3 = document.getElementById('anh3');

var btnPicture4 = document.getElementById('anh4');


btnPicture1.onclick = function(){
	divPicture.style.backgroundImage = 'url(./zing/anh1.jpg)';
}
btnPicture2.onclick = function(){
	divPicture.style.backgroundImage = 'url(./zing/anh2.jpg)';
}
btnPicture3.onclick = function(){
	divPicture.style.backgroundImage = 'url(./zing/anh3.jpg)';
}
btnPicture4.onclick = function(){
	divPicture.style.backgroundImage = 'url(./zing/anh4.jpg)';
}


// chuyển anh theo thời gian
var x = 0;
function changePictureOnTime(){
	function change(){
		x++
		setTimeout(function(){
			if(x<=4){
				divPicture.style.backgroundImage = 'url(./zing/anh'+x+'.jpg)';
				change();
			}
			else{
				x = 0;
				change();
			}
		},2500);
	}
	change();
}

changePictureOnTime();