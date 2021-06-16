const headerNav = document.getElementById('main-header');
const main = document.querySelector('.main');

const headerOffsetNumber = 30;
const headerHeight = 78;

window.addEventListener('scroll', event => {
	if (pageYOffset >= headerOffsetNumber) {
		headerNav.classList.add('sticky');
	} else {
		headerNav.classList.remove('sticky');
	}
})

function removeActiveClass(arr) {

	arr.forEach(item => {
		item.classList.remove('active');
	});

}