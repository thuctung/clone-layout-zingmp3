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
var fscog = document.getElementById('fa-cog');
var sidebar = document.getElementsByClassName('sidebar');
var turnoff = document.getElementsByClassName('turnoff');
var body = document.getElementById('body');
var onTop = document.getElementById('onTop');
var mess = document.getElementById('mess');

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
var y ="white";
cbk.onclick = function(e){
	if(this.checked){
		headerTop.style.background = y;
		image_zing.style.backgroundColor = y;
		search.style.backgroundColor = y;
		search.style.boxShadow = ".4px .4px 3px #5f5757";
		userIcon.style.color = "#535863";
		user.style.color = "#535863";
		headerBot.style.background = "rgb(83, 141, 158)";
		sidebar[0].style.background = "#e6e3e3";
		sidebar[1].style.background = "#e6e3e3";
		bat.style.background="#e6e3e3";
		fscog.style.color = "black";
		body.style.background = "#e6e3e3";
		onTop.style.color = "rgb(81,82,76)";
		mess.style.color = "rgb(81,82,76)";
		
	}
	else{
		headerTop.style.background ="black";
		image_zing.style.backgroundColor ="black";
		search.style.backgroundColor = "#131010";
		userIcon.style.color = "#d7dbe6";
		user.style.color = "#d7dbe6";
		headerBot.style.background = "#131010";
		sidebar[0].style.background = "#292424";
		sidebar[1].style.background = "#292424";
		bat.style.background="#443e3e";
		fscog.style.color = "grey";
		body.style.background = "#292424";
		onTop.style.color = y;
		mess.style.color = y;
	}
}

 