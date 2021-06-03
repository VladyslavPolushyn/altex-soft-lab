const desktopMenuLinks = document.querySelectorAll('#desktopMenu .menu__item');
const mobileMenuLinks = document.querySelectorAll('#mobileMenu .menu__item');

desktopMenuLinks.forEach(elem => {
	elem.addEventListener('click', () => {
		removeActiveClass(desktopMenuLinks);
		elem.classList.add('active');
	})
});

mobileMenuLinks.forEach(elem => {
	elem.addEventListener('click', () => {
		removeActiveClass(mobileMenuLinks);
		elem.classList.add('active');
	})
});

function removeActiveClass(arr) {

	arr.forEach(elem => {
		elem.classList.remove('active');
	});

}
