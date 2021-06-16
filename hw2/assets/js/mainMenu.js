const desktopMenuLinks = document.querySelectorAll('#desktop-menu .menu__item');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu .menu__item');

desktopMenuLinks.forEach(elem => {
	elem.addEventListener('click', () => {
		removeActiveClass(desktop-menuLinks);
		elem.classList.add('active');
	})
});

mobileMenuLinks.forEach(elem => {
	elem.addEventListener('click', () => {
		removeActiveClass(mobile-menuLinks);
		elem.classList.add('active');
	})
});

function removeActiveClass(arr) {
	arr.forEach(elem => {
		elem.classList.remove('active');
	});
}
