function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2); 
	}; 
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) { 
		document.querySelector('body').classList.add('webp'); 
	} 
	else { 
		document.querySelector('body').classList.add('no-webp'); 
	}
});
let linkBtns = document.querySelectorAll(".header__link");
// let linkItems = document.querySelectorAll(".header__link");

linkBtns.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;

		if(!currentBtn.classList.contains('active-link')) {
			linkBtns.forEach(function (item) {
				item.classList.remove('active-link');
			});

			currentBtn.classList.add('active-link');
		};
	});
});
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__menu').click(function () {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

