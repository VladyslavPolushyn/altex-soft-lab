const tabLinks = document.querySelectorAll('.hero__tabs a');
const tabNav = document.querySelector('.hero__tabs');
const stickyTab = tabNav.offsetTop;

const headerNav = document.querySelector('.main-header');

window.onscroll = function() {scrollFunc(stickyTab)};
window.addEventListener('scroll', event => {
	if (pageYOffset >= 30) {
		headerNav.classList.add('sticky');
	} else {
		headerNav.classList.remove('sticky');
	}
})


function scrollFunc(sticky) {
	if (window.pageYOffset >= sticky - 65) {
    tabNav.classList.add("sticky")
  } else {
    tabNav.classList.remove("sticky");
  }
}

tabLinks.forEach(elem => {
	elem.onclick = function() {
		removeActiveClass(tabLinks);
		elem.classList.add('active');
	}
});

function removeActiveClass(arr) {

	arr.forEach(item => {
		item.classList.remove('active');
	});

}

