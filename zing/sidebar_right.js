var onTop = document.getElementById('onTop');

onTop.onclick = ScrollToTop;
window.addEventListener('scroll', function(){
	if(window.scrollY > 5){
		onTop.classList.add('hideBtn');
	}
	else{
		onTop.classList.remove('hideBtn');
	}	
})

function ScrollToTop(){
	function scroll(){
		if(window.scrollY > 0){
			setTimeout(function(){
				window.scrollTo(0, window.scrollY - 40);
				scroll();
			}, 7)
		}
	}
	scroll();
}