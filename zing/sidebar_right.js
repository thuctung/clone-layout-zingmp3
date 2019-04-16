var onTop = document.getElementById('onTop');
 var btnChuyenAnh = document.getElementsByClassName('btnchuyenanh');
onTop.onclick = ScrollToTop;
window.addEventListener('scroll', function(){
	if(window.scrollY > 5){
		onTop.classList.add('hideBtn');
		for( z of btnChuyenAnh){
			z.classList.add('anbtn');
		}
	}
	else{
		onTop.classList.remove('hideBtn');
		for( z of btnChuyenAnh){
			z.classList.remove('anbtn');
		}
	}	
})

function ScrollToTop(){
	function scroll(){
		if(window.scrollY > 0){
			setTimeout(function(){
				window.scrollTo(0, window.scrollY - 10);
				scroll();
			}, 7)
		}
	}
	scroll();
}