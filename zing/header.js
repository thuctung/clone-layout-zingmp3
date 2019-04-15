var tunr = document.getElementById('turnon');
var bat= document.getElementById('div_togle');
var txtSing = document.getElementById('txtSing');
var clear = document.getElementById('clear');
var cbk = document.getElementById('cbkToggle');
var headerTop = document.getElementById('header-top');
var image_zing = document.getElementById('image_zing');
var search = document.getElementById('search');
var userIcon = document.getElementById('userIcon');
var user = document.getElementById('user');
var headerBot = document.getElementById('header_bottom');
var listMenu = document.getElementsByClassName('listMenu');

// hiện ẩn chức năng bật tắt đèn
tunr.onclick = function () {
	// body...
	bat.classList.toggle('turnoff');
}

// xóa giá trị trong ô tìm kiếm
clear.onclick = function () {
	// body...
	txtSing.value = '';
} 

// tắt sáng tối màu nền
var x ="white";
cbk.onclick = function(e){
	if(this.checked){
		headerTop.style.background = x;
		image_zing.style.backgroundColor = x;
		search.style.backgroundColor = x;
		search.style.boxShadow = ".4px .4px 3px #5f5757";
		userIcon.style.color = "#535863";
		user.style.color = "#535863";
		headerBot.style.background = "rgb(249, 246, 246)";
		
	}
	else{
		headerTop.style.background ="#171010e3";
		image_zing.style.backgroundColor ="#2f2a2ae3";
		search.style.backgroundColor = "#131010";
		userIcon.style.color = "#d7dbe6";
		user.style.color = "#d7dbe6";
		headerBot.style.background = "#292121";
	}
}

 